"use client";

import React from "react";
import { Button, Tabs } from "@/components";
import { TasksPreview } from "@/components/Todos";
import { tabList } from "@/lib/utils/static";
import { MusicPreview } from "@/components/Media";

function Pomodoropage() {
  return (
    <div id="app_timer" className="app_timer">
      <div className="app_timer_main">
        <div>
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

        <div className="app_timer_main_media">
          <MusicPreview />
        </div>
      </div>

      <div className="app_timer_tasks">
        <TasksPreview />
      </div>
    </div>
  );
}

export default Pomodoropage;
