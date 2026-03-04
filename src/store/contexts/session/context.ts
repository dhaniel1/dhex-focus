"use client";

import { createContext, Dispatch, SetStateAction, useContext } from "react";

import {
  sessionCountInitialState,
  TimeType,
  TimeValues,
} from "@/lib/utils/static";

interface SessionContext {
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

export const SessionContext = createContext<SessionContext>({
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
  const ctx = useContext(SessionContext);

  if (ctx === undefined) {
    throw new Error("sessionContext was used outside of the SessionProvider");
  }

  return ctx;
};
