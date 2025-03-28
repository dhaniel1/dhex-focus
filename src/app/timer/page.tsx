"use client";

import React from "react";
import { Button, Tabs } from "@/components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TodoPreview } from "@/components/Todos";

/* function TaskPreview (){
  return 
} */

function Pomodoropage() {
  return (
    <DndProvider backend={HTML5Backend}>
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
        <div className="app_timer_tasks">
          <TodoPreview />
        </div>
      </div>
    </DndProvider>
  );
}

export default Pomodoropage;
