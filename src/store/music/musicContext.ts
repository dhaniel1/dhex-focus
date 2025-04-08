import { useAudio } from "@/hooks";
import { createContext, useContext } from "react";

type IMusicContext = ReturnType<typeof useAudio>;

export const MusicContext = createContext<IMusicContext>({
  currentTrackIndex: 0,
  isPlaying: false,
  volume: [50], // Example default volume as an array
  progress: 0,
  play: () => {},
  pause: () => {},
  stop: () => {},
  next: () => {},
  prev: () => {},
  setTrack: () => {},
  setVolume: () => {},
  error: null,
  currentTrack: null,
});

const useMusicContext = () => {
  const context = useContext(MusicContext);

  if (context === undefined) {
    throw new Error("pomodoroContext was used outside of the MusicProvider");
  }

  return context;
};
export default useMusicContext;
