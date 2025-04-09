import { ALARMTYPE } from "@/lib/utils/static";

export enum POMODOROACTIONTYPE {
  UpdateFocusLevel,
  UpdateAlarmType,
  UpdateAlarmVolumeLevel,
  UpdateAutoStartBreakStatus,
  UpdateAutoStartPomodoroStatus,
  UpdateNotificationStatus,
  UpdateLanguagePreference,
}

export interface UpdateFocusLevel {
  type: POMODOROACTIONTYPE.UpdateFocusLevel;
  payload: string;
}

export interface UpdateAlarmType {
  type: POMODOROACTIONTYPE.UpdateAlarmType;
  payload: ALARMTYPE;
}

export interface UpdateAlarmVolumeLevel {
  type: POMODOROACTIONTYPE.UpdateAlarmVolumeLevel;
  payload: number;
}

export interface UpdateAutoStartPomodoroStatus {
  type: POMODOROACTIONTYPE.UpdateAutoStartPomodoroStatus;
  payload: boolean;
}

export interface UpdateAutoStartBreakStatus {
  type: POMODOROACTIONTYPE.UpdateAutoStartBreakStatus;
  payload: boolean;
}

export interface UpdateNotificationStatus {
  type: POMODOROACTIONTYPE.UpdateNotificationStatus;
  payload: boolean;
}

export interface UpdateLanguagePreference {
  type: POMODOROACTIONTYPE.UpdateLanguagePreference;
  payload: string;
}

export type PomodoroActions =
  | UpdateFocusLevel
  | UpdateAlarmType
  | UpdateAlarmVolumeLevel
  | UpdateAutoStartPomodoroStatus
  | UpdateAutoStartBreakStatus
  | UpdateNotificationStatus
  | UpdateLanguagePreference;
