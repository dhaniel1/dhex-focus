import { useEffect, useRef, useState } from "react";
import { alarms, ALARMTYPE } from "@/lib/utils/static";
import { usePomodoroContext } from "@/store";

const useAlarm = () => {
  const [{ isPlaying, duration }, setPlay] = useState({
    isPlaying: false,
    duration: 3,
  });

  const {
    state: {
      alarm: { soundType, alarmVolumeLevel },
    },
  } = usePomodoroContext();

  const alarmRef = useRef<HTMLAudioElement | null>(null);

  const SoundIndex = alarms.findIndex(({ title }) => title === soundType);
  const alarm = soundType === ALARMTYPE.MUTE ? null : alarms?.[SoundIndex];

  useEffect(
    function () {
      if (alarmRef.current) {
        alarmRef.current.pause();
      }
      if (soundType === ALARMTYPE.MUTE) {
        alarmRef.current = null;
      }
      if (alarm?.audioSrc) {
        alarmRef.current = new Audio(alarm?.audioSrc);
      }
    },

    [alarm?.audioSrc, soundType]
  );

  useEffect(
    function () {
      if (alarmRef.current) {
        alarmRef.current.volume = alarmVolumeLevel / 100;
      }
    },

    [alarmVolumeLevel]
  );

  useEffect(
    function () {
      if (alarmRef.current) {
        alarmRef.current.pause();
      }

      if (alarmRef.current && isPlaying) {
        alarmRef.current.play();
      }

      const timeout = setTimeout(() => {
        setPlay((prevVal) => {
          return { ...prevVal, isPlaying: false };
        });
      }, duration * 1000);
      return () => clearTimeout(timeout);
    },

    [isPlaying, alarm?.audioSrc, duration]
  );

  return setPlay;
};

export default useAlarm;
