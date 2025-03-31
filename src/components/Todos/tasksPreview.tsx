import React, { FC, useCallback } from "react";

import { RadioGroup } from "../ui/radio-group";
import { type TodoItem, TODOSTAGE, useTodoContext } from "@/store/todos";
import { TODOACTIONTYPE } from "@/store/todos/todoActions";
import ITodoTablet from "./todoTablet";

const TasksInProgress: FC = () => {
  const {
    states: { inProgress },
    dispatch,
  } = useTodoContext();

  const handleValueChange = useCallback(
    (value: string) => {
      const selectedTodoItem = inProgress.find(({ description }) => {
        return description === value;
      });

      if (selectedTodoItem) {
        const updatedTodo: TodoItem = {
          ...selectedTodoItem,
          todoStage: TODOSTAGE.COMPLETED,
        };

        dispatch({ type: TODOACTIONTYPE.UpdateTodo, payload: updatedTodo });
      }
    },
    [dispatch, inProgress]
  );

  return (
    <div className="m-auto h-[80vh] w-full flex flex-col gap-2 overflow-scroll">
      <RadioGroup
        className="w-[99.6%] mx-auto"
        defaultValue={"CHANGE ME"} // TODO: Fix defualt value
        onValueChange={(value) => {
          setTimeout(() => handleValueChange(value), 500); // Simulates an api process lol
        }}
      >
        {inProgress.map(({ description }) => (
          <ITodoTablet key={description} value={description} isPreview={true} />
        ))}
      </RadioGroup>
    </div>
  );
};

export default TasksInProgress;
