import React, { FC, ReactNode } from "react";
import { MusicContext } from "./musicContext";
import { useAudio } from "@/hooks";
import { lofiSound } from "@/lib/utils/static";

interface Iprop {
  children: ReactNode;
}

const MusicProvider: FC<Iprop> = ({ children }) => {
  const providerValue = useAudio(lofiSound);

  return (
    <MusicContext.Provider value={providerValue}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicProvider;
