import {
  AlarmIcon,
  ClockBoldIcon,
  ClockIcon,
  NotificationIcon,
  RestartBoldIcon,
  TasksIcon,
} from "@/components/shared/svgs";
import { routes } from "../routes";
import { Itab } from "@/components/SideNav";

export const sideNavTabs: Itab[] = [
  { title: "Timer", icon: ClockIcon, url: routes.timer.path },
  { title: "Tasks", icon: TasksIcon, url: routes.tasks.path },
];

export type FocusLevelType = "baby step" | "popular" | "medium" | "extended";
export type TimeType = "timer" | "rest" | "longRest";

// Define the structure for time values
export type TimeValues = {
  [key in TimeType]: number;
};

// Define a type for each focus level item in the array
export type FocusLevel = {
  [key in FocusLevelType]?: TimeValues;
};

export const focusLevels: FocusLevel[] = [
  { "baby step": { timer: 10, rest: 5, longRest: 10 } },
  { popular: { timer: 20, rest: 5, longRest: 15 } },
  { medium: { timer: 40, rest: 8, longRest: 20 } },
  { extended: { timer: 60, rest: 10, longRest: 25 } },
];

export const alarmType = {
  sound1: true,
  sound2: false,
  sound3: false,
  mute: false,
};

export enum SETTINGSTYPE {
  FocusLevel = "Focus Level",
  Alarm = "Alarm",
  AutoStart = "Auto Start",
  Notification = "Notifications",
}

export enum POMODOROSTAGE {
  POMODORO = "Pomodoro",
  REST = "Rest",
  LONGREST = "Long Rest",
}

export const settings = [
  { title: SETTINGSTYPE.FocusLevel, icon: ClockBoldIcon, children: {} },
  { title: SETTINGSTYPE.Alarm, icon: AlarmIcon, children: {} },
  { title: SETTINGSTYPE.AutoStart, icon: RestartBoldIcon, children: {} },
  { title: SETTINGSTYPE.Notification, icon: NotificationIcon, children: {} },
];
// type Settings = Record<string, unknown>;

export const language = ["English", "Español", "Português"];
