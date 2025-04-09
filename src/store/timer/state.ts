import { ALARMTYPE } from "@/lib/utils/static";

export const initialPomodoroState = {
  focusLevel: "baby step",
  autoStart: {
    pomodoro: true,
    breaks: true,
  },
  alarm: {
    soundType: ALARMTYPE.SOUND2,
    alarmVolumeLevel: 90,
  },
  notifications: true,
  preferedLanguage: "english",
};

export type PomodoroState = ReturnType<() => typeof initialPomodoroState>;
