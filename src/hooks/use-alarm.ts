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
  const { audioSrc } = alarms[SoundIndex];

  useEffect(
    function () {
      if (alarmRef.current) {
        alarmRef.current.pause();
      }

      alarmRef.current = new Audio(audioSrc);
      alarmRef.current.volume = alarmVolumeLevel / 100;
      alarmRef.current.play();
    },

    [alarmVolumeLevel, audioSrc]
  );

  useEffect(
    function () {
      if (alarmRef.current && play) {
        alarmRef.current.pause();
      }

      alarmRef.current?.play();
    },

    [play]
  );

  console.log(alarmRef);
  return setPlay;
};

export default useAlarm;
