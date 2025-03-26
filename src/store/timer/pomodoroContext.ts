"use client";

import { createContext, useContext } from "react";
import { type PomodoroState, initialPomodoroState } from "./state";
import { PomodoroActions } from "./pomodoroActions";

export const PomodoroContext = createContext<{
  state: PomodoroState;
  dispatch: React.Dispatch<PomodoroActions>;
}>({
  state: initialPomodoroState,
  dispatch: () => undefined,
});

export const usePomodoroContext = () => {
  const context = useContext(PomodoroContext);

  if (context === undefined)
    throw new Error("pomodoroContext was used outside of the pomodoroProvider");

  return context;
};
