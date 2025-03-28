import { todoList } from "@/lib/utils/static";
import React from "react";
import DragList from "../DragAndDrop";
import Button from "../Button";

const TodoPreview = () => {
  return (
    <div className="w-full h-max">
      <div className="flex justify-between mb-3 items-center">
        <h2 className="text-left font-black  text-3xl">
          Tasks
          <span className="font-medium text-2xl pl-2">{todoList.length}</span>
        </h2>
        <Button
          className="text-md font-medium"
          size="lg"
          variant="primary"
          label="Manage Todo's"
        />
      </div>
      <DragList dragList={todoList} />
    </div>
  );
};

export default TodoPreview;
