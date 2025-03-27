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

  const [sessionState /* setSessionState */] = useState({
    timer: 0,
    rest: 0,
    longRest: 0,
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
