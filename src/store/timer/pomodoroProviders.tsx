"use client";

import { FC, ReactNode, useEffect, useReducer, useState } from "react";
import { useCountdown, usePersistedState } from "@/hooks";
import {
  PomodoroContext,
  SessionContext,
  PomodoroReducer,
  initialPomodoroState,
  type PomodoroState,
} from ".";

import {
  sessionCountInitialState,
  TimeType,
  TimeValues,
} from "@/lib/utils/static";

interface Iprop {
  children: ReactNode;
}

export const PomodoroProvider: FC<Iprop> = ({ children }) => {
  const [localStorageState, setLocalStorageState] =
    usePersistedState<PomodoroState>("focus-timer-state", initialPomodoroState);

  const [state, dispatch] = useReducer(PomodoroReducer, localStorageState);

  useEffect(() => {
    setLocalStorageState(state);
  }, [state, setLocalStorageState]);

  return (
    <PomodoroContext.Provider value={{ state, dispatch }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export const SessionProvider: FC<Iprop> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<TimeType>("timer");
  const [persistedState, setPersistedState] = usePersistedState<TimeValues>(
    "session-count",
    sessionCountInitialState
  );

  const { formattedTime, start, stop, isActive } = useCountdown({
    setActiveTab,
    setPersistedState,
    activeTab,
  });

  return (
    <SessionContext.Provider
      value={{
        stop,
        start,
        isActive,
        activeTab,
        setActiveTab,
        sessionState: persistedState,
        music: "Lofi",
        formattedTime,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
