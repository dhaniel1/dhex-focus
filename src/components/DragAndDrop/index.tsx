import { capitalize, cn } from "@/lib/utils";
import React, { FC, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useTodoContext } from "@/store/todos";

interface IDraggableItem {
  id: number;
  text: string;
  index: number;
  moveItem: (fromIndex: number, toIndex: number) => void;
  ItemType: string;
}

const DraggableItem: FC<IDraggableItem> = ({
  id,
  text,
  index,
  moveItem,
  ItemType,
}) => {
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

const DragList: FC = () => {
  const {
    states: { inProgress },
    // dispatch,
  } = useTodoContext();

  const [items, setItems] = useState(inProgress);

  const moveItem = (fromIndex: number, toIndex: number) => {
    const updated = [...items];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setItems(updated);
  };
  const ItemType = "IN PROGRESS PREVIEW";
  return (
    <div className="m-auto h-[80vh] w-full flex flex-col gap-2 overflow-scroll">
      <RadioGroup
        className="w-[99.6%] mx-auto"
        defaultValue={"CHANGE ME"} // TODO: Fix defualt value
        onValueChange={(value) => {
          console.log(value);
        }}
      >
        {items.map(({ id, description }, index) => (
          <DraggableItem
            key={id}
            id={id}
            index={index}
            text={description}
            moveItem={moveItem}
            ItemType={ItemType}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default DragList;
