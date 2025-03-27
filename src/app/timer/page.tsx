"use client";

import React, { useState } from "react";
import { Button, Tabs } from "@/components";

function Pomodoropage() {
  //TODO: Put this in the store
  const [{ pomodoro, rest, long }] = useState({
    pomodoro: 7,
    rest: 3,
    long: 4,
  });

  return (
    <div className="app_timer">
      <div className="app_timer_intro">
        <Button
          variant="ghost"
          size="lg"
          className="text-2xl font-extrabold"
          label=" Why don't you take a challenge? 😏"
        />
      </div>
      <div className="app_timer_tabs">
        <Tabs
          tabs={[
            {
              value: "timer",
              label: "pomodoro",
              rate: pomodoro,
            },
            { value: "rest", rate: rest },
            {
              value: "longRest",
              label: "long rest",
              rate: long,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Pomodoropage;
