import { ALARMTYPE } from "@/lib/utils/static";

export const initialPomodoroState = {
  focusLevel: "baby step",
  autoStart: {
    pomodoro: true,
    breaks: false,
  },
  alarm: {
    soundType: ALARMTYPE.SOUND2,
    alarmVolumeLevel: 90,
  },
  notifications: false,
  preferedLanguage: "english",
};

export type PomodoroState = ReturnType<() => typeof initialPomodoroState>;
