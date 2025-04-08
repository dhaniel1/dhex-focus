"use client";

import { TaskBoard } from "@/components/Todos";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function TodoPage() {
  return (
    <div id="app_todo" className="app_todo">
      <DndProvider backend={HTML5Backend}>
        <TaskBoard />
      </DndProvider>
    </div>
  );
}

export default TodoPage;
