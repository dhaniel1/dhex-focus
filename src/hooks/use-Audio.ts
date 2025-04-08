import { useEffect, useRef, useState } from "react";
import { StaticImageData } from "next/image";

type Tracks = {
  title: string;
  audioSrc: string;
  image: StaticImageData | string;
}[];

// Custom hook to manage audio playback
export const useAudio = (tracks: Tracks) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState<number[]>([90]);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create or update audio element when track changes
  useEffect(() => {
    // Clean up previous audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeEventListener("timeupdate", updateProgress);
      audioRef.current.removeEventListener("ended", handleTrackEnd);
      audioRef.current.removeEventListener("error", handleAudioError);
    }

    // Initialize new audio only if we have a valid track
    if (currentTrackIndex >= 0 && currentTrackIndex < tracks.length) {
      audioRef.current = new Audio(tracks[currentTrackIndex].audioSrc);

      // Set up event listeners
      audioRef.current.addEventListener("timeupdate", updateProgress);
      audioRef.current.addEventListener("ended", handleTrackEnd);
      audioRef.current.addEventListener("error", handleAudioError);

      // Auto-play if needed
      if (isPlaying) {
        audioRef.current.play().catch(handleAudioError);
      }

      setError(null);
    }

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("timeupdate", updateProgress);
        audioRef.current.removeEventListener("ended", handleTrackEnd);
        audioRef.current.removeEventListener("error", handleAudioError);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrackIndex, tracks]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(handleAudioError);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Update volume when it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  function updateProgress() {
    if (audioRef.current) {
      const value =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(isNaN(value) ? 0 : value);
    }
  }

  function handleTrackEnd() {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      // Option: loop back to first track or stop
      setCurrentTrackIndex(0);
    }
  }

  function handleAudioError() {
    setError("Error loading audio. Please try again.");
    setIsPlaying(false);
    console.error("Audio error:");
  }

  function play() {
    if (currentTrackIndex < 0) {
      setCurrentTrackIndex(0);
    }

    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(handleAudioError);
    }
  }

  function pause() {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }

  function stop() {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setProgress(0);
    }
  }

  function next() {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
  }

  function prev() {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  }

  const setTrack = (index: number) => {
    if (index >= 0 && index < tracks.length) {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    }
  };

  return {
    currentTrackIndex,
    currentTrack: currentTrackIndex >= 0 ? tracks[currentTrackIndex] : null,
    isPlaying,
    volume,
    progress,
    error,
    play,
    pause,
    stop,
    next,
    prev,
    setTrack,
    setVolume,
  };
};
