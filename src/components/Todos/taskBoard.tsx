import React, { FC, useMemo } from "react";
import { TodoItem, TodoStage, useTodoContext } from "@/store/todos";
import TodoTablet from "./todoTablet";
import { capitalize } from "@/lib/utils";
import Button from "../Button";
import { PlusIcon } from "../shared/svgs";

interface ISubBoard {
  listData: TodoItem[];
  stage: TodoStage;
}

const SubBoard: FC<ISubBoard> = ({ listData, stage }) => {
  return (
    <div className="app_todo_container_board_item ">
      <div className="pb-3 absolute bg-inherit z-10 top-0 left-0">
        <p className="font-bold text-xl">
          {capitalize(stage)}
          <span className="text-md font-medium ml-2">{listData.length}</span>
        </p>
      </div>
      <div className="app_todo_container_board_item_list">
        {listData.map(({ description }) => (
          <TodoTablet key={description} value={description} />
        ))}
      </div>
    </div>
  );
};

const TaskBoard = () => {
  const {
    states: { rawState },
  } = useTodoContext();

  type ITaskboard = { id: number; stage: TodoStage; children: TodoItem[] }[];

  const SortedTodos = useMemo(
    () =>
      rawState.reduce(
        (acc, todoitem, index) => {
          const existingStage = acc.find(
            (value) => value.stage === todoitem.todoStage
          );

          if (existingStage) {
            existingStage.children.push(todoitem);
          } else {
            acc.push({
              id: index,
              stage: todoitem.todoStage,
              children: [todoitem],
            });
          }

          return acc;
        },
        [
          { id: 0, stage: "to do", children: [] },
          { id: 0, stage: "in progress", children: [] },
          { id: 0, stage: "completed", children: [] },
        ] as ITaskboard
      ),
    [rawState]
  );

  // console.log("SortedTodos", SortedTodos);
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
        {SortedTodos.map(({ id, children, stage }) => (
          <SubBoard key={id} stage={stage} listData={children} />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
