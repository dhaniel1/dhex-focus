export const initialPomodoroState = {
  focusLevel: "baby step",
  autoStart: {
    pomodoro: true,
    breaks: true,
  },
  alarm: {
    soundType: "long",
    alarmVolumeLevel: 90,
  },
  notifications: true,
  preferedLanguage: "english",
};

export type PomodoroState = ReturnType<() => typeof initialPomodoroState>;
