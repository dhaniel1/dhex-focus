"use client";

import { useEffect, useRef, useState } from "react";

const useCountdown = (totalTimeInMinutes: number) => {
  const totalTime = totalTimeInMinutes * 60; // in seconds
  const [timeRemaining, setTimeRemaining] = useState(totalTime);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(
    function () {
      setTimeRemaining(totalTime);
    },
    [totalTime]
  );

  useEffect(() => {
    if (isActive && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, timeRemaining, totalTimeInMinutes]);

  const start = () => {
    setIsActive(true);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setTimeRemaining(totalTime);
      setIsActive(false);
    }
  };

  function padZero(value: number) {
    return value > 9 ? value.toString() : "0" + value;
  }

  function formatTimeVisual(rawVal: number) {
    const minutes = padZero(Math.floor((rawVal % 3600) / 60));
    const seconds = padZero(rawVal % 60);

    return `${minutes} : ${seconds}`;
  }

  const formattedTime = isActive
    ? formatTimeVisual(timeRemaining)
    : formatTimeVisual(totalTime);

  return {
    formattedTime,
    isActive,
    start,
    stop,
  };
};

export default useCountdown;
