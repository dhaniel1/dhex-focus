export const initialPomodoroState = {
  focusLevel: "popular",
  autoStart: {
    pomodoro: true,
    breaks: true,
  },
  alarm: {
    soundType: "long",
    alarmVolumeLevel: 90,
  },
  notifications: false,
  preferedLanguage: "english",
};

export type PomodoroState = ReturnType<() => typeof initialPomodoroState>;
