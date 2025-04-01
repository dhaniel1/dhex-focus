"use client";

import React from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { routes } from "@/lib/routes";
import { TODOSTAGE, useTodoContext } from "@/store/todos";
import TasksInProgress from "./tasksPreview";

const TodoPreview = () => {
  const router = useRouter();
  const { state } = useTodoContext();

  const inProgress = state.find(
    (stateItem) => stateItem.stage === TODOSTAGE.INPROGRESS
  );

  return (
    <div className="w-full h-max">
      <div className="flex justify-between mb-5 items-start">
        <div className="flex flex-col">
          <h2 className="text-left font-bold  text-2xl">
            Tasks in progress
            <span className="font-medium text-xl pl-2">
              {inProgress?.children.length}
            </span>
          </h2>
          <p className="text-primary text-sm pt-2">
            Select to mark a completed
          </p>
        </div>
        <Button
          className="text-md font-medium"
          size="lg"
          variant="primary"
          onClick={() => router.push(routes.tasks.path)}
        >
          View all Todos
        </Button>
      </div>
      <TasksInProgress inProgress={inProgress} />
    </div>
  );
};

export default TodoPreview;
