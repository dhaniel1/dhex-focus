"use client";

import { FC, useEffect, useReducer } from "react";
import { usePersistedState } from "@/hooks";
import {
  PomodoroReducer,
  initialPomodoroState,
  type PomodoroState,
} from "../../reducers/pomodoro";
import { PomodoroContext } from "./context";

export const PomodoroProvider: FC<React.PropsWithChildren> = ({ children }) => {
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
