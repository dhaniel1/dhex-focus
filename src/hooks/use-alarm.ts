import { useEffect, useRef, useState } from "react";
import { alarms } from "@/lib/utils/static";
import { usePomodoroContext } from "@/store";

const useAlarm = () => {
  const [play, setPlay] = useState<boolean>();

  const {
    state: {
      alarm: { soundType, alarmVolumeLevel },
    },
  } = usePomodoroContext();

  const alarmRef = useRef<HTMLAudioElement | null>(null);

  const SoundIndex = alarms.findIndex(({ title }) => title === soundType);
  const alarm = alarms?.[SoundIndex];

  useEffect(
    function () {
      if (alarmRef.current) {
        alarmRef.current.pause();
      }

      if (alarm?.audioSrc) {
        alarmRef.current = new Audio(alarm?.audioSrc);
      }
    },

    [alarm?.audioSrc]
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

      if (alarmRef.current && play) {
        alarmRef.current.play();
      }
    },

    [play, alarm?.audioSrc]
  );

  return setPlay;
};

export default useAlarm;
