"use client";

import { FC, useState } from "react";
import { useCountdown } from "@/hooks";
import { music, TimeType } from "@/lib/utils/static";
import { SessionContext } from "./context";

export const SessionProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<TimeType>("timer");

  const {
    formattedTime,
    start,
    sessionState,
    setSessionState,
    stop,
    isActive,
  } = useCountdown({
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
        setSessionState,
        music,
        formattedTime,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
