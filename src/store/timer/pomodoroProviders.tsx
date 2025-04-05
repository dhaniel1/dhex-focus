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

import { TimeType } from "@/lib/utils/static";

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

  const { formattedTime, sessionState, start, stop, isActive } = useCountdown({
    setActiveTab,
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
        sessionState,
        music: "Lofi",
        formattedTime,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
