"use client";

import { usePomodoroContext } from "@/store";
import { Switch } from "..";
import { POMODOROACTIONTYPE } from "@/store/timer/pomodoroActions";

export default function NotificationSetting() {
  const {
    state: { notifications },
    dispatch,
  } = usePomodoroContext();

  return (
    <div className="flex items-center space-x-2 text-lg text-[#334154] font-bold mt-4 w-full justify-between">
      <label htmlFor="completion">Notifify Completion</label>

      <Switch
        id="completion"
        checked={notifications}
        onCheckedChange={(newVal) =>
          dispatch({
            type: POMODOROACTIONTYPE.UpdateNotificationStatus,
            payload: newVal,
          })
        }
      />
    </div>
  );
}
