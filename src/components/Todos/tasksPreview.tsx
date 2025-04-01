import React, { FC, useCallback } from "react";

import { RadioGroup } from "../ui/radio-group";
import {
  type TodoItem,
  TODOSTAGE,
  TodoStateItem,
  useTodoContext,
} from "@/store/todos";
import { TODOACTIONTYPE } from "@/store/todos/todoActions";
import TodoTablet from "./todoTablet";

type ITasksInProgress = {
  inProgress: TodoStateItem | undefined;
};

const TasksInProgress: FC<ITasksInProgress> = ({ inProgress }) => {
  const { dispatch } = useTodoContext();
  const { children } = inProgress!;

  const handleValueChange = useCallback(
    (value: string) => {
      const selectedTodoItem = children.find(({ description }) => {
        return description === value;
      });

      const updatedCurrrentStageChildren = children.filter(
        ({ description }) => {
          return description !== value;
        }
      );

      if (selectedTodoItem) {
        const newStage = TODOSTAGE.COMPLETED;
        const currentStage = selectedTodoItem.todoStage;

        dispatch({
          type: TODOACTIONTYPE.UpdateTodo,
          payload: {
            toIndex: 0,
            newStage,
            currentStage,
            updatedTodoItem: selectedTodoItem,
            updatedStageChildren: updatedCurrrentStageChildren as TodoItem[],
          },
        });
      }
    },
    [children, dispatch]
  );

  return (
    <div className="m-auto p-0.5 h-[80vh] w-full flex flex-col gap-2 overflow-scroll">
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
