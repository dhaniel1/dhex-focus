import React, { FC, useRef } from "react";
import { RadioGroupItem } from "../ui/radio-group";
import { useDrag, useDrop } from "react-dnd";
import { cn } from "@/lib/utils";
import { TodoItem, TodoStage } from "@/store/todos";

interface ITodoTablet {
  data: TodoItem;
  isPreview?: boolean;
  arrayIndex?: number;
  currentStage: TodoStage;
  moveItem?: (
    fromStage: TodoStage,
    toStage: TodoStage,
    fromIndex: number,
    item: TodoItem,
    toIndex: number
  ) => void;
}

interface DragItem {
  data: TodoItem;
  arrayIndex: number;
  currentStage: TodoStage;
  id: number;
}

const ItemType = "TODO_ITEM";

const TodoTablet: FC<ITodoTablet> = ({
  data,
  isPreview = false,
  arrayIndex,
  currentStage,
  moveItem,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: {
      data,
      arrayIndex,
      currentStage,
      id: data.id,
    } as DragItem,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: ItemType,
    hover(item: DragItem) {
      if (!ref.current) return;

      // Don't replace items with themselves
      if (
        item.arrayIndex === arrayIndex &&
        item.currentStage === currentStage
      ) {
        return;
      }

      // Only perform actions if we have the necessary function and data
      if (moveItem && arrayIndex !== undefined) {
        moveItem(
          item.currentStage,
          currentStage,
          item.arrayIndex,
          item.data,
          arrayIndex // The actual index where we want to insert
        );

        // Update the item's index and stage
        item.arrayIndex = arrayIndex;
        item.currentStage = currentStage;
      }
    },

    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={!isPreview ? ref : undefined}
      className={cn(
        "w-full flex gap-6 items-start rounded-lg border-[#cbd5e1] drop-shadow-sm px-3 py-5 mx-0 my-0.5 text-lg",
        {
          "opacity-50": isDragging,
          "bg-blue-50": isOver,
          "bg-white": !isOver && !isDragging,
          "cursor-move": !isPreview,
        }
      )}
    >
      {isPreview && (
        <RadioGroupItem id={data?.description} value={data?.description} />
      )}

      <label className={cn({ "cursor-move": !isPreview })}>
        {data.description}
      </label>
    </div>
  );
};

export default TodoTablet;
