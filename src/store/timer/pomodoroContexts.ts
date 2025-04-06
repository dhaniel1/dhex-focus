"use client";

import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { type PomodoroState, initialPomodoroState } from "./state";
import { PomodoroActions } from "./pomodoroActions";
import {
  TimeType,
  TimeValues,
  sessionCountInitialState,
} from "@/lib/utils/static";

interface IPomodoroContext {
  state: PomodoroState;
  dispatch: React.Dispatch<PomodoroActions>;
}

export const PomodoroContext = createContext<IPomodoroContext>({
  state: initialPomodoroState,
  dispatch: () => undefined,
});

export const usePomodoroContext = () => {
  const context = useContext(PomodoroContext);

  if (context === undefined)
    throw new Error("pomodoroContext was used outside of the pomodoroProvider");

  return context;
};

interface ISessionContext {
  formattedTime: string;
  isActive: boolean;
  music: string;
  start: () => void;
  stop: () => void;
  activeTab: TimeType;
  sessionState: {
    timer: number;
    rest: number;
    longRest: number;
  };
  setSessionState: Dispatch<SetStateAction<TimeValues>>;
  setActiveTab: Dispatch<SetStateAction<TimeType>>;
}

export const SessionContext = createContext<ISessionContext>({
  music: "",
  isActive: false,
  activeTab: "rest",
  formattedTime: "",
  sessionState: sessionCountInitialState,
  stop: () => undefined,
  start: () => undefined,
  setActiveTab: () => undefined,
  setSessionState: () => undefined,
});

export const useSessionContext = () => {
  const context = useContext(SessionContext);

  if (context === undefined) {
    throw new Error("pomodoroContext was used outside of the SessionProvider");
  }

  return context;
};
