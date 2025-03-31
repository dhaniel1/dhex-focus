import React, { FC } from "react";
import { RadioGroupItem } from "../ui/radio-group";

interface ITodoTablet {
  value: string;
  isPreview?: boolean;
}

const TodoTablet: FC<ITodoTablet> = ({ value, isPreview = false }) => {
  return (
    <div className="w-full flex gap-6 items-start bg-[#f9fafb] rounded-lg border-[#cbd5e1] drop-shadow-sm px-3 py-5 mx-0 my-1 text-lg">
      {isPreview && <RadioGroupItem id={value} value={value} />}
      <label className="cursor-move">
        <div className="flex flex-col gap-1 justify-between w-full ">
          <p>{value}</p>
        </div>
      </label>
    </div>
  );
};

export default TodoTablet;
