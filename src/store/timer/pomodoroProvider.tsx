"use client";

import { FC, ReactNode, useEffect, useReducer } from "react";
import { PomodoroContext } from "./pomodoroContext";
import { initialPomodoroState, PomodoroState } from "./state";
import { PomodoroReducer } from "./pomodoroReducer";
import { usePersistedState } from "@/hooks";

interface Iprop {
  children: ReactNode;
}

const PomodoroProvider: FC<Iprop> = ({ children }) => {
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

export default PomodoroProvider;
