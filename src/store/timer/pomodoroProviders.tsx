"use client";

import { FC, ReactNode, useEffect, useReducer, useState } from "react";
import { PomodoroContext, SessionContext } from "./pomodoroContexts";
import { initialPomodoroState, PomodoroState } from "./state";
import { PomodoroReducer } from "./pomodoroReducer";
import { useActiveFocusLevel, useCountdown, usePersistedState } from "@/hooks";
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
  const { activeFocusLevelValues } = useActiveFocusLevel();

  const { formattedTime, start, stop, isActive } = useCountdown(
    activeFocusLevelValues![activeTab]
  );

  return (
    <SessionContext.Provider
      value={{
        formattedTime,
        start,
        stop,
        music: "Lofi",
        activeTab,
        setActiveTab,
        isActive,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
