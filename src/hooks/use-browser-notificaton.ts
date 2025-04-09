"use client";

import { capitalize } from "@/lib/utils";
import { TIMETYPE, TimeType } from "@/lib/utils/static";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import useAlarm from "./use-alarm";

function createNotification(activeTab: TimeType) {
  let notificationDetails;

  switch (activeTab) {
    case TIMETYPE.TIMER:
      notificationDetails = {
        title: "Focus",
        body: "Let's hit our goal again",
      };
      break;
    case TIMETYPE.REST:
      notificationDetails = {
        title: "Rest",
        body: "Let's go on a short break",
      };
      break;
    case TIMETYPE.LONGREST:
      notificationDetails = {
        title: "Long Rest",
        body: "Let's take a short nap to freshen up our mind",
      };
      break;
    default:
      notificationDetails = { title: "Unknown", body: "Not sure what to do" };
  }

  return new Notification(`${capitalize(notificationDetails.title)} time`, {
    body: notificationDetails.body,
    // Changed to false since we manually close it after 5 seconds anyway
    requireInteraction: false,
  });
}

function checkNotificationPermission(
  setNotificationPermission: Dispatch<SetStateAction<boolean>>
) {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
    return;
  }

  if (Notification.permission === "granted") {
    setNotificationPermission(true);
    console.log("Notification has been initially granted");
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        setNotificationPermission(true);
        console.log("Notification has now been granted");
      }
      if (permission === "denied") {
        setNotificationPermission(false);
        console.log("Notification has been denied, sorry");
      }
    });
  }
}

/**
 * Hook for managing browser notifications for different timer states
 * @param title The type of timer currently active
 * @returns Object containing notification reference and setter function
 */
const useBrowserNotification = (
  title: TimeType
): {
  notification: React.RefObject<Notification | null>;
  setNotify: Dispatch<SetStateAction<boolean>>;
} => {
  const [notificationPermission, setNotificationPermission] =
    useState<boolean>(false);
  const [notify, setNotify] = useState<boolean>(false);
  const notification = useRef<Notification | null>(null);

  const setPlay = useAlarm();

  // Check notification permission on mount
  useEffect(() => {
    checkNotificationPermission(setNotificationPermission);
  }, []);

  // Handle notification creation and cleanup
  useEffect(() => {
    // Create notification when permission is granted and notify flag is true
    if (notificationPermission && notify) {
      notification.current = createNotification(title);
      setPlay(notify);

      // Set up event listeners
      const handleVisibilityChange = () => {
        if (document.visibilityState === "visible") {
          // The tab has become visible so close the notification
          notification.current?.close();
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      // Auto-close notification after 5 seconds
      if (notification.current) {
        notification.current.onshow = () => {
          setTimeout(() => {
            notification.current?.close();
          }, 5000);
        };
      }

      // Cleanup function
      return () => {
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
        notification.current?.close();
      };
    }
  }, [notificationPermission, notify, setPlay, title]);

  return { notification, setNotify };
};

export default useBrowserNotification;
