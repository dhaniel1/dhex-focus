"use client";

import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePomodoroContext } from "@/store";
import {
  useActiveFocusLevel,
  useBrowserNotification,
  usePersistedState,
} from ".";
import {
  TimeType,
  TimeValues,
  pomodoroStage,
  sessionCountInitialState,
} from "@/lib/utils/static";

interface IuseCountdownProp {
  setActiveTab: Dispatch<SetStateAction<TimeType>>;
  activeTab: TimeType;
}

const useCountdown = ({ activeTab, setActiveTab }: IuseCountdownProp) => {
  const { activeFocusLevelValues } = useActiveFocusLevel();
  const totalTime /* in seconds */ = activeFocusLevelValues![activeTab] * 60;
  const [timeRemaining, setTimeRemaining] = useState(totalTime);
  const [isActive, setIsActive] = useState(false);
  const [persistedState, setPersistedState] = usePersistedState<TimeValues>(
    "session-count",
    sessionCountInitialState
  );
  const [sessionState, setSessionState] = useState<TimeValues>(persistedState);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { showNotification } = useBrowserNotification();

  const {
    state: {
      autoStart: { breaks },
    },
  } = usePomodoroContext();

  const TIMER_PERCENT = 0.35;
  const eightyPercentThreshold = Math.floor(totalTime * TIMER_PERCENT);

  useEffect(
    function () {
      setTimeRemaining(totalTime);
    },
    [totalTime]
  );

  useEffect(
    function () {
      if (eightyPercentThreshold === timeRemaining) {
        setSessionState((prevVal) => {
          return { ...prevVal, [activeTab]: prevVal[activeTab] + 1 };
        });
      }
    },
    [activeTab, eightyPercentThreshold, timeRemaining, totalTime]
  );

  useEffect(
    function () {
      setPersistedState(() => sessionState);
    },
    [sessionState, setPersistedState]
  );

  useEffect(() => {
    if (isActive && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            showNotification(activeTab);
            if (breaks) {
              const activeStageIndex = pomodoroStage.findIndex(
                (value) => value === activeTab
              );

              if (activeStageIndex + 1 < pomodoroStage.length) {
                setActiveTab(pomodoroStage[activeStageIndex + 1]);
                return totalTime;
              }
            }
            clearInterval(intervalRef.current!);
            setIsActive(false);
            return totalTime;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [
    activeTab,
    breaks,
    isActive,
    setActiveTab,
    showNotification,
    timeRemaining,
    totalTime,
  ]);

  const start = () => {
    setIsActive(true);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setTimeRemaining(totalTime);
      setIsActive(false);
    }
  };

  function padZero(value: number) {
    return value > 9 ? value.toString() : "0" + value;
  }

  function formatTimeVisual(rawVal: number) {
    const minutes =
      rawVal === 3600 ? 60 : padZero(Math.floor((rawVal % 3600) / 60));
    const seconds = padZero(rawVal % 60);

    return `${minutes} : ${seconds}`;
  }

  const formattedTime = isActive
    ? formatTimeVisual(timeRemaining)
    : formatTimeVisual(totalTime);

  return {
    formattedTime,
    sessionState,
    setSessionState,
    isActive,
    start,
    stop,
  };
};

export default useCountdown;
