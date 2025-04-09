"use client";

import { usePomodoroContext } from "@/store";
import { Switch } from "..";
import { POMODOROACTIONTYPE } from "@/store/timer/pomodoroActions";
import { useBrowserNotification } from "@/hooks";

export default function NotificationSetting() {
  const {
    state: { notifications },
    dispatch,
  } = usePomodoroContext();

  const { notificationPermission, handleEnableNotifications } =
    useBrowserNotification();

  return (
    <div className="flex items-center space-x-2 text-lg text-[#334154] font-bold mt-4 w-full justify-between">
      <label htmlFor="completion">Notify Completion</label>

      <Switch
        id="completion"
        checked={notifications}
        onCheckedChange={async (newVal) => {
          if (notificationPermission === false) {
            const granted = await handleEnableNotifications();

            if (granted) {
              dispatch({
                type: POMODOROACTIONTYPE.UpdateNotificationStatus,
                payload: newVal, // newval should be true here
              });
            }
          } else {
            // Permission already granted, just update the state
            dispatch({
              type: POMODOROACTIONTYPE.UpdateNotificationStatus,
              payload: newVal,
            });
          }
        }}
      />
    </div>
  );
}
