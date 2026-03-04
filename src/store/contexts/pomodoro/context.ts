"use client";

import { createContext, useContext } from "react";

import { PomodoroActions } from "../../reducers/pomodoro/pomodoroActions";
import {
  type PomodoroState,
  initialPomodoroState,
} from "@/store/reducers/pomodoro/state";

interface IPomodoroContext {
  state: PomodoroState;
  dispatch: React.Dispatch<PomodoroActions>;
}

export const PomodoroContext = createContext<IPomodoroContext>({
  state: initialPomodoroState,
  dispatch: () => undefined,
});

export const usePomodoroContext = () => {
  const ctx = useContext(PomodoroContext);

  if (ctx === undefined)
    throw new Error("pomodoroContext was used outside of the pomodoroProvider");

  return ctx;
};
