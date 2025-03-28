// App.js

import { capitalize, cn } from "@/lib/utils";
import React, { FC, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface IDraggableItem {
  id: number;
  text: string;
  index: number;
  moveItem: (fromIndex: number, toIndex: number) => void;
}

const ItemType = "DRAGGABLE_ITEM";

const DraggableItem: FC<IDraggableItem> = ({ id, text, index, moveItem }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item: Record<"index", number>) {
      if (item.index === index) return;

      moveItem(item.index, index);
      item.index = index;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref)); // Make it both draggable and droppable

  return (
    <div
      ref={ref}
      className={cn(
        "w-full flex gap-6 items-start bg-amber-200 rounded-lg border-[#cbd5e1] drop-shadow-sm px-3 py-5 mx-0 my-1 cursor-move text-lg",
        [isDragging ? "bg-[#e0e0e0]" : "bg-[#fff]"]
      )}
    >
      <RadioGroupItem id={text} value={text} />
      <label className="cursor-move">
        <div className="flex flex-col gap-1 justify-between w-full ">
          <p>{capitalize(text)}</p>
        </div>
      </label>
    </div>
  );
};

interface IDragList {
  className?: string;
  dragList: Array<{ id: number; todoItem: string }>;
}

const DragList: FC<IDragList> = ({ className, dragList }) => {
  const [items, setItems] = useState(dragList);

  const moveItem = (fromIndex: number, toIndex: number) => {
    const updated = [...items];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setItems(updated);
  };

  return (
    <div className={cn("m-auto w-full flex flex-col gap-2", className)}>
      <RadioGroup
        defaultValue={"CHANGE ME"}
        onValueChange={(value) => {
          console.log(value);
        }}
      >
        {items.map(({ id, todoItem }, index) => (
          <DraggableItem
            key={id}
            id={id}
            index={index}
            text={todoItem}
            moveItem={moveItem}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default DragList;
