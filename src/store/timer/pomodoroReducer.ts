import { POMODOROACTIONTYPE, type PomodoroActions } from "./pomodoroActions";
import { type PomodoroState } from "./state";

export const PomodoroReducer = function (
  state: PomodoroState,
  action: PomodoroActions
): PomodoroState {
  switch (action.type) {
    /* Updates Focus Level  */
    case POMODOROACTIONTYPE.UpdateFocusLevel:
      return { ...state, focusLevel: action.payload };

    /* Updates the alarm/notification type */
    case POMODOROACTIONTYPE.UpdateAlarmType:
      return {
        ...state,
        alarm: {
          ...state.alarm,
          soundType: action.payload,
        },
      };

    /* Updates the alarm/notification volume */
    case POMODOROACTIONTYPE.UpdateAlarmVolumeLevel:
      return {
        ...state,
        alarm: { ...state.alarm, alarmVolumeLevel: action.payload },
      };

    /* Updates the Auto Start Break Status */
    case POMODOROACTIONTYPE.UpdateAutoStartPomodoroStatus:
      return {
        ...state,
        autoStart: {
          ...state.autoStart,
          pomodoro: action.payload,
        },
      };

    /* Updates the Auto Start Break Status */
    case POMODOROACTIONTYPE.UpdateAutoStartBreakStatus:
      return {
        ...state,
        autoStart: {
          ...state.autoStart,
          breaks: action.payload,
        },
      };

    /* Updates the notification status */
    case POMODOROACTIONTYPE.UpdateNotificationStatus:
      return {
        ...state,
        notifications: action.payload,
      };

    /* Updates User Language Preference */
    case POMODOROACTIONTYPE.UpdateLanguagePreference:
      return {
        ...state,
        preferedLanguage: action.payload,
      };
  }
};
