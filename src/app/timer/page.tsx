"use client";

import React from "react";
import { Button, Tabs } from "@/components";
import { TodoPreview } from "@/components/Todos";
import { tabList } from "@/lib/utils/static";

function Pomodoropage() {
  return (
    <div className="app_timer">
      <div className="app_timer_main">
        <div className="app_timer_main_intro">
          <Button
            variant="ghost"
            size="lg"
            className="text-2xl font-extrabold"
            label=" Why don't you take a challenge? 😏"
          />
        </div>

        <div className="app_timer_main_tabs">
          <Tabs tabs={tabList} />
        </div>
      </div>
      <div className="app_timer_tasks">
        <TodoPreview />
      </div>
    </div>
  );
}

export default Pomodoropage;
