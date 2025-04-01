import React, { FC } from "react";
import { TodoItem, TodoStage, useTodoContext } from "@/store/todos";
import TodoTablet from "./todoTablet";
import { capitalize } from "@/lib/utils";
import Button from "../Button";
import { PlusIcon } from "../shared/svgs";
import { TODOACTIONTYPE } from "@/store/todos/todoActions";

interface ISubBoard {
  listData: TodoItem[];
  stage: TodoStage;
}

const SubBoard: FC<ISubBoard> = ({ listData, stage }) => {
  const { dispatch } = useTodoContext();

  const moveItem = (
    fromIndex: number,
    toIndex: number,
    newStage: TodoStage,
    movedTodo: TodoItem
  ) => {
    dispatch({
      type: TODOACTIONTYPE.MoveTodo,
      payload: {
        movedTodo,
        newStage,
        newTodoIndex: toIndex,
        oldTodoIndex: fromIndex,
      },
    });
  };

  return (
    <div className="app_todo_container_board_item ">
      <div className="pb-3 absolute bg-inherit z-10 top-0 left-0">
        <p className="font-bold text-xl">
          {capitalize(stage)}
          <span className="text-md font-medium ml-2">{listData.length}</span>
        </p>
      </div>
      <div className="app_todo_container_board_item_list">
        {listData.map((data, arrayIndex) => (
          <TodoTablet
            key={data.description}
            arrayIndex={arrayIndex}
            data={data}
            moveItem={moveItem}
          />
        ))}
      </div>
    </div>
  );
};

const TaskBoard = () => {
  const { state } = useTodoContext();

  return (
    <div className="app_todo_container">
      <div className="app_todo_container_header">
        <Button
          iconDimension="1.5rem"
          icon={PlusIcon}
          variant="primary"
          className="p-6 font-bold text-lg"
        >
          Add To do
        </Button>
      </div>
      <div className="app_todo_container_board ">
        {state.map(({ id, children, stage }) => {
          return <SubBoard key={id} stage={stage} listData={children} />;
        })}
      </div>
    </div>
  );
};

export default TaskBoard;
