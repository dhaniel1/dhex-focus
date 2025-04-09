import { routes } from "../routes";
import { Itab } from "@/components/SideNav";
import { images, SVGIcons } from "@/lib/assets";
import { sounds } from "../assets";

const {
  AlarmIcon,
  ClockBoldIcon,
  ClockIcon,
  NotificationIcon,
  RestartBoldIcon,
  TasksIcon,
} = SVGIcons;

export enum TASKFORMTYPE {
  CREATE = "create",
  EDIT = "edit",
}
export type TaskFormType = `${TASKFORMTYPE}`;

export enum ALARMTYPE {
  SOUND1 = "sound1",
  SOUND2 = "sound2",
  SOUND3 = "sound3",
  MUTE = "mute",
}
// export type AlarmType = `${ALARMTYPE}`;

export enum SETTINGSTYPE {
  FocusLevel = "Focus Level",
  Alarm = "Alarm",
  AutoStart = "Auto Start",
  Notification = "Notifications",
}

export enum POMODOROSTAGE {
  POMODORO = "Pomodoro", // TODO: Confirm if this should be timer
  REST = "Rest",
  LONGREST = "Long Rest",
}

export enum TIMETYPE {
  TIMER = "timer",
  REST = "rest",
  LONGREST = "longRest",
}

export type FocusLevelType = "baby step" | "popular" | "medium" | "extended";
export type TimeType = `${TIMETYPE}`;

// Define the structure for time values
export type TimeValues = {
  [key in TimeType]: number;
};

// Define a type for each focus level item in the array
export type FocusLevel = {
  [key in FocusLevelType]?: TimeValues;
};

export const sideNavTabs: Itab[] = [
  { title: "Timer", icon: ClockIcon, url: routes.timer.path },
  { title: "Tasks", icon: TasksIcon, url: routes.tasks.path },
];

export const focusLevels: FocusLevel[] = [
  { "baby step": { timer: 1, rest: 5, longRest: 10 } },
  { popular: { timer: 20, rest: 5, longRest: 15 } },
  { medium: { timer: 40, rest: 8, longRest: 20 } },
  { extended: { timer: 60, rest: 10, longRest: 25 } },
];

/* export const alarmType = {
  sound1: true,
  sound2: false,
  sound3: false,
  mute: false,
};
 */
export const settings = [
  { title: SETTINGSTYPE.FocusLevel, icon: ClockBoldIcon },
  { title: SETTINGSTYPE.Alarm, icon: AlarmIcon },
  { title: SETTINGSTYPE.AutoStart, icon: RestartBoldIcon },
  { title: SETTINGSTYPE.Notification, icon: NotificationIcon },
];
// type Settings = Record<string, unknown>;

export const language = ["English", "Español", "Português"];

export const tabList: Array<{ value: TimeType; label?: string }> = [
  {
    value: "timer",
    label: "pomodoro",
  },
  { value: "rest" },
  {
    value: "longRest",
    label: "long rest",
  },
];

export const pomodoroStage = tabList.map(({ value }) => value);

export const ErrorMessages = {
  required: (value: string) => `${value} is required`,
  selectOne: (value: string) => `You have to select at least one ${value}`,
  invalidType: (value: string) => `Please input only ${value}`,
  length: (num: number = 6, label: string) =>
    `Your ${label} must be ${num} characters.`,
  tooLong: (label: string, length: number) =>
    `Your ${label} must not be more than ${length} characters`,
};

export const sessionCountInitialState = {
  timer: 0,
  rest: 0,
  longRest: 0,
};

export const lofiSound = [
  {
    title: "Lofi 1",
    audioSrc: sounds.lofi.lofi1,
    image: images.lofiImages.lofi1_img,
  },
  {
    title: "Lofi 2",
    audioSrc: sounds.lofi.lofi2,
    image: images.lofiImages.lofi2_img,
  },
  {
    title: "Lofi 3",
    audioSrc: sounds.lofi.lofi3,
    image: images.lofiImages.lofi3_img,
  },
  {
    title: "Lofi 4",
    audioSrc: sounds.lofi.lofi4,
    image: images.lofiImages.lofi4_img,
  },
];

export const alarms = [
  { title: ALARMTYPE.SOUND1, audioSrc: sounds.alarms.sound1 },
  { title: ALARMTYPE.SOUND2, audioSrc: sounds.alarms.sound2 },
  { title: ALARMTYPE.SOUND3, audioSrc: sounds.alarms.sound3 },
  { title: ALARMTYPE.MUTE, audioSrc: sounds.alarms.sound3 },
];

export type Alarms = ReturnType<() => typeof alarms>;
