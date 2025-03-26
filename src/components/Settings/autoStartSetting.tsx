"use client";

import { usePomodoroContext } from "@/store";
import { POMODOROACTIONTYPE } from "@/store/timer/pomodoroActions";
import { Switch } from "..";

export default function AutoStartSetting() {
  const {
    state: {
      autoStart: { pomodoro, breaks },
    },
    dispatch,
  } = usePomodoroContext();

  return (
    <div className="flex flex-col gap-4 items-center space-x-2 text-lg text-[#334154] font-bold mt-4 w-full justify-between">
      <div
        id="pomodoros"
        className="flex w-full justify-between items-center m-0"
      >
        <label htmlFor="pomodoros">Auto start pomodoros </label>
        <Switch
          id="pomodoros"
          checked={pomodoro}
          onCheckedChange={(newVal) =>
            dispatch({
              type: POMODOROACTIONTYPE.UpdateAutoStartPomodoroStatus,
              payload: newVal,
            })
          }
        />
      </div>
      <div id="breaks" className="flex w-full justify-between items-center">
        <label htmlFor="breaks">Auto start breaks </label>
        <Switch
          id="breaks"
          checked={breaks}
          onCheckedChange={(newVal) =>
            dispatch({
              type: POMODOROACTIONTYPE.UpdateAutoStartBreakStatus,
              payload: newVal,
            })
          }
        />
      </div>
    </div>
  );
}
