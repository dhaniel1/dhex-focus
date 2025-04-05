"use client";

import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useActiveFocusLevel, usePersistedState } from ".";
import { pomodoroStage, TimeType, TimeValues } from "@/lib/utils/static";
import { usePomodoroContext } from "@/store";

interface IuseCountdownProp {
  setActiveTab: Dispatch<SetStateAction<TimeType>>;
  activeTab: TimeType;
}

const useCountdown = ({ activeTab, setActiveTab }: IuseCountdownProp) => {
  const { activeFocusLevelValues } = useActiveFocusLevel();
  const totalTime = activeFocusLevelValues![activeTab] * 60; // in seconds
  const [timeRemaining, setTimeRemaining] = useState(totalTime);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [persistedState, setPersistedState] = usePersistedState<TimeValues>(
    "session-count",
    {
      timer: 0,
      rest: 0,
      longRest: 0,
    }
  );
  const {
    state: {
      autoStart: { breaks },
    },
  } = usePomodoroContext();

  const EIGHTY_PERCENT = 0.3;
  const eightyPercentThreshold = Math.floor(totalTime * EIGHTY_PERCENT);

  useEffect(
    function () {
      setTimeRemaining(totalTime);
    },
    [totalTime]
  );

  useEffect(
    function () {
      if (eightyPercentThreshold === timeRemaining) {
        setPersistedState((prevVal) => {
          return { ...prevVal, [activeTab]: prevVal[activeTab] + 1 };
        });
      }
    },
    [
      activeTab,
      eightyPercentThreshold,
      setPersistedState,
      timeRemaining,
      totalTime,
    ]
  );

  useEffect(() => {
    if (isActive && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
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
            return 0;
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
  }, [activeTab, breaks, isActive, setActiveTab, timeRemaining, totalTime]);

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
    sessionState: persistedState,
    isActive,
    start,
    stop,
  };
};

export default useCountdown;
