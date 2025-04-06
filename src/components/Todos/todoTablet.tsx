import React, { forwardRef, HTMLAttributes, useState } from "react";
import { RadioGroupItem } from "../ui/radio-group";

import { cn } from "@/lib/utils";
import { TodoActions } from ".";
import { TodoItem } from "@/store/todos";

interface ITodoTablet extends HTMLAttributes<HTMLDivElement> {
  data: TodoItem;
  arrayIndex: number;

  isOver?: boolean;
  isPreview?: boolean;
  isDragging?: boolean;
}

const TodoTablet = forwardRef<HTMLDivElement, ITodoTablet>(
  (
    { isDragging, isOver, data, arrayIndex, className, isPreview = false },
    ref
  ) => {
    const [showActions, setShowActions] = useState<boolean>(false);

    return (
      <div
        ref={ref}
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
        className={cn(
          "relative w-full flex gap-6 items-start rounded-lg border-[#cbd5e1] drop-shadow-sm px-3 py-5 mx-0 my-0.5 text-lg",
          {
            "opacity-50": isDragging,
            "bg-blue-50": isOver,
            "bg-white": !isOver && !isDragging,
          },
          className
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
    );
  }
);

TodoTablet.displayName = "TodoTablet";

export default TodoTablet;
