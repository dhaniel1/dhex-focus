import React, { FC, useRef, useState } from "react";
import { RadioGroupItem } from "../ui/radio-group";
import { useDrag, useDrop } from "react-dnd";
import { capitalize, cn } from "@/lib/utils";
import { TodoItem, TodoStage, useTodoContext } from "@/store/todos";
import { DeleteIcon, EditIcon } from "../shared/svgs";
import Dialog from "../Dialog";
import { TODOACTIONTYPE } from "@/store/todos/todoActions";
import { TaskForm } from "../forms";
import { TASKFORMTYPE } from "@/lib/utils/static";

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
  const [showActions, setShowActions] = useState<boolean>(false);
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
    <>
      <div
        ref={!isPreview ? ref : undefined}
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
        className={cn(
          "relative w-full flex gap-6 items-start rounded-lg border-[#cbd5e1] drop-shadow-sm px-3 py-5 mx-0 my-0.5 text-lg",
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

        {showActions && <TodoActions data={data} dataIndex={arrayIndex!} />}

        <label className={cn({ "cursor-move": !isPreview })}>
          {data.description}
        </label>
      </div>
    </>
  );
};

export default TodoTablet;

const TodoActions = ({
  data,
  dataIndex,
}: {
  data: TodoItem;
  dataIndex: number;
}) => {
  const { dispatch } = useTodoContext();

  function confirmDelete() {
    dispatch({
      type: TODOACTIONTYPE.DeleteTodo,
      payload: { index: dataIndex, todoStage: data.todoStage },
    });
  }

  const iconStyle =
    "hover:bg-[#F3F3FE] rounded-full p-0.5 cursor-pointer hover:stroke-primary/50 hover:text-primary/50 box-content ";

  return (
    <div
      className="flex items-center gap-1 justify-center bg-white rounded-lg z-80 absolute top-1/2 transform -translate-y-1/2 right-3 p-2 shadow-md cursor-auto"
      style={{ boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)" }}
    >
      <Dialog
        dialogTitle="Edit Task"
        enableFooter={false}
        dialogContent={
          <TaskForm
            type={TASKFORMTYPE.EDIT}
            editData={data}
            dataIndex={dataIndex}
          />
        }
        confirmAction={confirmDelete}
      >
        <EditIcon
          className={iconStyle}
          style={{ height: "1.6rem", width: "1.6rem" }}
        />
      </Dialog>

      <Dialog
        dialogTitle="Confirm Delete"
        dialogDescription={`Are you sure you want to delete this task?`}
        dialogContent={<DeleteDialogContent data={data} />}
        confirmAction={confirmDelete}
      >
        <DeleteIcon
          className={iconStyle}
          style={{ height: "1.4rem", width: "1.5rem" }}
        />
      </Dialog>
    </div>
  );
};

const DeleteDialogContent = ({ data }: { data: TodoItem }) => {
  return (
    <div className="bg-gray-100 rounded-md p-3">
      <p>
        <span className="font-medium ">Task:</span>
        {data.description}
      </p>
      <p>
        <span className="font-medium ">Stage:</span>
        {capitalize(data.todoStage)}
      </p>
    </div>
  );
};
