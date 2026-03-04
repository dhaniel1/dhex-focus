import React, { FC, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { TodoTablet } from "../Todos";
import { ItemType } from "@/lib/utils/static";
import { TodoItem, TodoStage } from "@/store/reducers/todos";

interface DraggableAndDropableProps {
  data: TodoItem;
  isPreview?: boolean;
  arrayIndex: number;
  currentStage: TodoStage;
  moveItem?: (
    fromStage: TodoStage,
    toStage: TodoStage,
    fromIndex: number,
    item: TodoItem,
    toIndex: number,
  ) => void;
}

interface DragItem {
  data: TodoItem;
  arrayIndex: number;
  currentStage: TodoStage;
  id: number;
}

const DraggableAndDropable: FC<DraggableAndDropableProps> = ({
  data,
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
          arrayIndex, // The actual index where we want to insert
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
    <TodoTablet
      ref={ref}
      isDragging={isDragging}
      isOver={isOver}
      data={data}
      className="cursor-move"
      arrayIndex={arrayIndex}
    />
  );
};

export default DraggableAndDropable;
