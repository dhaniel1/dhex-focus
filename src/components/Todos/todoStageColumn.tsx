import React, { FC, useRef } from "react";
import { useDrop } from "react-dnd";

import { DraggableAndDropable } from "../Dnd";

import { capitalize, cn } from "@/lib/utils";
import { type TodoItem, type TodoStage } from "@/store/todos";

interface ITodoColumn {
  stage: TodoStage;
  items: TodoItem[];
  index: number;
  moveItem: (
    fromStage: TodoStage,
    toStage: TodoStage,
    fromIndex: number,
    item: TodoItem,
    toIndex: number
  ) => void;
}

const TodoStageColumn: FC<ITodoColumn> = ({
  stage,
  items,
  index,
  moveItem,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop({
    accept: "TODO_ITEM",
    drop: (item: {
      data: TodoItem;
      arrayIndex: number;
      currentStage: TodoStage;
    }) => {
      if (item.currentStage !== stage) {
        moveItem(item.currentStage, stage, item.arrayIndex, item.data, index);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  drop(ref);

  return (
    <div
      ref={ref}
      className={` app_todo_container_board_item  rounded-lg  min-h-64 `}
    >
      <div className="pb-3 absolute bg-inherit z-10 top-0 left-0">
        <h2 className="font-bold text-xl mb-4 capitalize">
          {capitalize(stage)}
          <span className="text-md font-medium ml-2">{items.length}</span>
        </h2>
      </div>

      <div
        className={cn("app_todo_container_board_item_list", [
          isOver ? "bg-blue-50" : "bg-gray-50",
        ])}
      >
        {items.map((item, index) => (
          <DraggableAndDropable
            key={item.id}
            data={item}
            arrayIndex={index}
            currentStage={stage}
            moveItem={moveItem}
          />
        ))}

        {items.length === 0 && (
          <div className="text-gray-400 text-center p-4">
            Create or Drop items here
          </div>
        )}
      </div>
    </div>
  );
};
export default TodoStageColumn;
