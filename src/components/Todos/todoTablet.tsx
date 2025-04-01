import React, { FC } from "react";
import { RadioGroupItem } from "../ui/radio-group";
import { useDrag, useDrop } from "react-dnd";
import { cn } from "@/lib/utils";
import { TodoItem, TodoStage } from "@/store/todos";

interface ITodoTablet {
  data: TodoItem;
  isPreview?: boolean;
  arrayIndex?: number;
  moveItem?: (
    fromIndex: number,
    toIndex: number,
    newStage: TodoStage,
    movedTodo: TodoItem
  ) => void;
}
const ItemType = "TODO_ITEM";
const TodoTablet: FC<ITodoTablet> = ({
  data,
  isPreview = false,
  arrayIndex,
  moveItem,
}) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item: { data: TodoItem; arrayIndex: number }) {
      console.log("Hovered item", item);

      if (item.arrayIndex === arrayIndex) return;
      if (moveItem) moveItem(arrayIndex!, 2, "completed", item.data!);
      // item.index = index;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { data, arrayIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref)); // Make it both draggable and droppable

  return (
    <div
      ref={!isPreview ? ref : undefined}
      className={cn(
        "w-full flex gap-6 items-start bg-[#f9fafb] rounded-lg border-[#cbd5e1] drop-shadow-sm px-3 py-5 mx-0 my-1 text-lg ",
        [isDragging ? "bg-[#e0e0e0]" : "bg-[#fff]"],
        { "cursor-move": !isPreview }
      )}
    >
      {isPreview && (
        <RadioGroupItem id={data?.description} value={data?.description} />
      )}

      <label className={cn("bla bal", { "cursor-move": !isPreview })}>
        {data.description}
      </label>
    </div>
  );
};

export default TodoTablet;
