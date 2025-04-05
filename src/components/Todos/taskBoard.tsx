import React from "react";
import { TodoItem, TodoStage, useTodoContext } from "@/store/todos";

import Button from "../Button";
import { PlusIcon } from "../shared/svgs";
import { TODOACTIONTYPE } from "@/store/todos/todoActions";
import TodoStageColumn from "./todoStageColumn";
import Dialog from "../Dialog";
import { TaskForm } from "../forms";
import { TASKFORMTYPE } from "@/lib/utils/static";

const TaskBoard = () => {
  const { state: todoState, dispatch } = useTodoContext();

  const handleMoveItem = (
    fromStage: TodoStage,
    toStage: TodoStage,
    fromIndex: number,
    item: TodoItem,
    toIndex: number
  ) => {
    // If moving within the same stage, just reorder
    if (fromStage === toStage) {
      const stageTodos =
        todoState
          .find((stateitem) => stateitem.stage === fromStage)
          ?.children.slice() || [];

      // If we found the item and the indices are different
      if (toIndex !== -1 && toIndex !== undefined && toIndex !== fromIndex) {
        const [movedItem] = stageTodos.splice(toIndex, 1);
        stageTodos.splice(fromIndex, 0, movedItem);

        dispatch({
          type: TODOACTIONTYPE.ReorderTodo,
          payload: {
            stage: fromStage,
            reorderedItems: stageTodos,
          },
        });
      }
      return;
    }

    // Dispatch the update action
    dispatch({
      type: TODOACTIONTYPE.MoveTodo,
      payload: {
        newStage: toStage,
        newTodoIndex: toIndex,
        oldTodoIndex: fromIndex,
        movedTodo: item,
      },
    });
  };

  return (
    <div className="app_todo_container">
      <div className="app_todo_container_header">
        <Dialog
          enableFooter={false}
          dialogTitle="Add Task"
          dialogContent={<TaskForm type={TASKFORMTYPE.CREATE} />}
        >
          <Button
            iconDimension="1.5rem"
            icon={PlusIcon}
            variant="primary"
            className="p-6 font-bold text-lg"
          >
            Add Task
          </Button>
        </Dialog>
      </div>
      <div className="app_todo_container_board ">
        {todoState.map(({ id, children, stage }, index) => {
          return (
            <TodoStageColumn
              key={id}
              stage={stage}
              items={children}
              index={index}
              moveItem={handleMoveItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskBoard;
