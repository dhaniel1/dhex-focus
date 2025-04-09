"use client";

import { capitalize } from "@/lib/utils";
import { TIMETYPE, TimeType } from "@/lib/utils/static";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import useAlarm from "./use-alarm";

function createNotification(title: TimeType) {
  let notificationDetials;

  switch (title) {
    case TIMETYPE.TIMER:
      notificationDetials = {
        title: "Focus",
        body: "Let's hit our goal again",
      };
      break;
    case TIMETYPE.REST:
      notificationDetials = {
        title: "Rest",
        body: "Let's go on a short break",
      };
      break;
    case TIMETYPE.LONGREST:
      notificationDetials = {
        title: "Focus",
        body: "Let's take a short nap to freshen up our mind",
      };
      break;
    default:
      notificationDetials = { title: "Unknown", body: "Not sure what to do" };
  }

  return new Notification(`${capitalize(notificationDetials.title)} time`, {
    body: notificationDetials.body,
    requireInteraction: true,
  });
}

/* function notificationPermissionStatus(
  setNotificationPermission: Dispatch<SetStateAction<boolean>>
) {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    // const notification = new Notification("Hi there!");
    // …
    setNotificationPermission(true);
    console.log("Notification has been initially granted");
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        // const notification = new Notification("Hi there!");
        // …
        setNotificationPermission(true);

        console.log("Notification has now been granted");
      }
      if (permission === "denied") {
        // const notification = new Notification("Hi there!");
        // …
        setNotificationPermission(false);

        console.log("Notification has been denied, sorry");
      }
    });
  }

  return;
  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
} */

const useBrowserNotificaton = (title: TimeType) => {
  // Create a notification
  const [notificationPermission, setNotificationPermission] =
    useState<boolean>(false);
  const [notify, setNotify] = useState<boolean>(false);
  const notification = useRef<Notification | null>(null);

  const setPlay = useAlarm();

  useEffect(() => {
    function notificationPermissionStatus(
      setNotificationPermission: Dispatch<SetStateAction<boolean>>
    ) {
      if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
      } else if (Notification.permission === "granted") {
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

      return;
    }
    notificationPermissionStatus(setNotificationPermission);
  }, []);

  useEffect(
    function () {
      if (notificationPermission && notify) {
        notification.current = createNotification(title);
        setPlay(notify);
      }

      if (notification.current) {
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible") {
            // The tab has become visible so clear the now-stale Notification.
            notification.current?.close();
          }
        });

        notification.current.onshow = (event: Event) => {
          setTimeout(() => {
            console.log(event);

            notification.current?.close();
          }, 5000);
        };

        notification.current.onclick = () => {
          console.log("Notification was clicked");
        };
      }
    },
    [notificationPermission, notify, setPlay, title]
  );

  return { notification, setNotify };
};

export default useBrowserNotificaton;
