"use client";

import React from "react";
import { Button, Tabs } from "@/components";

function Pomodoropage() {
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
            },
            { value: "rest" },
            {
              value: "longRest",
              label: "long rest",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Pomodoropage;
