import React, { FC, useCallback } from "react";

import { RadioGroup } from "../ui/radio-group";
import { TODOSTAGE, TodoStateItem, useTodoContext } from "@/store/todos";
import { TODOACTIONTYPE } from "@/store/todos/todoActions";
import TodoTablet from "./todoTablet";

type ITasksInProgress = {
  inProgress: TodoStateItem | undefined;
};

const TasksInProgress: FC<ITasksInProgress> = ({ inProgress }) => {
  const { dispatch } = useTodoContext();
  // const { children } = inProgress;

  const handleValueChange = useCallback(
    (value: string) => {
      const oldTodoIndex = inProgress?.children.findIndex(({ description }) => {
        return description === value;
      });

      console.log("oldTodoIndex", oldTodoIndex);

      const movedTodo = inProgress?.children[oldTodoIndex!];
      const newStage = TODOSTAGE.COMPLETED;

      if (oldTodoIndex !== undefined && oldTodoIndex !== null && movedTodo) {
        dispatch({
          type: TODOACTIONTYPE.MoveTodo,
          payload: {
            newStage,
            newTodoIndex: 0,
            oldTodoIndex,
            movedTodo,
          },
        });
      }
    },
    [dispatch, inProgress?.children]
  );

  return (
    <div className="m-auto p-2 h-[80vh] w-full flex flex-col gap-2 overflow-scroll bg-gray-50 rounded-lg">
      <RadioGroup
        defaultValue={"CHANGE ME"} // TODO: Fix defualt value
        onValueChange={(value) => {
          setTimeout(() => handleValueChange(value), 10); // Simulates an api process lol
        }}
      >
        {inProgress?.children.map((data, index) => {
          return (
            <TodoTablet
              key={data.description}
              data={data}
              isPreview={true}
              arrayIndex={index}
              currentStage={TODOSTAGE.INPROGRESS}
            />
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default TasksInProgress;
