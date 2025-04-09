"use client";

import { capitalize } from "@/lib/utils";
import { getNotificationDetails, TimeType } from "@/lib/utils/static";
import { useEffect, useRef, useState } from "react";
import useAlarm from "./use-alarm";
import { usePomodoroContext } from "@/store";

const useBrowserNotificaton = () => {
  const [notificationPermission, setNotificationPermission] = useState<
    boolean | undefined
  >(undefined);
  const notificationRef = useRef<Notification | null>(null);

  const playAlarm = useAlarm();
  const {
    state: { notifications },
  } = usePomodoroContext();

  useEffect(() => {
    setNotificationPermission(Notification.permission === "granted");
  }, [notifications]);

  const requestPermission = async () => {
    if (!("Notification" in window)) {
      console.warn("This browser does not support desktop notification");
      return false;
    }

    try {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission === "granted");
      return permission === "granted";
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      return false;
    }
  };

  const showNotification = (title: TimeType) => {
    console.log("notificationPermission", notificationPermission);

    if (!notificationPermission) {
      console.warn("Notifications not granted");
      return null;
    }

    notificationRef.current?.close();

    const details = getNotificationDetails(title);
    const notification = new Notification(`${capitalize(details.title)} time`, {
      body: details.body,
      requireInteraction: true,
    });

    playAlarm(true);

    // Auto-close after 5 seconds
    const timeout = setTimeout(() => {
      notification.close();
      playAlarm(false);
    }, 6000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        notification.close();
        if (timeout) clearTimeout(timeout);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    notification.onclose = () => {
      clearTimeout(timeout);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (notificationRef.current === notification) {
        notificationRef.current = null;
      }
    };

    notification.onclick = () => {
      console.log("Notification clicked");
      window.focus();
    };

    notificationRef.current = notification;
    return notification;
  };

  const handleEnableNotifications = async () => {
    const granted = await requestPermission();
    if (granted) {
      setNotificationPermission(true);
    }
    return granted;
  };

  useEffect(() => {
    return () => {
      notificationRef.current?.close();
    };
  }, []);

  return {
    notificationPermission,
    permission: notificationPermission,
    requestPermission,
    showNotification,
    handleEnableNotifications,
  };
};

export default useBrowserNotificaton;
