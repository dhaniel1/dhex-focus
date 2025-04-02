import React from "react";

import {
  Select as ShadSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { RenderIf } from "../shared";
import { cn } from "@/lib/utils";

interface IProps {
  placeholder?: string;
  label?: string;
  selectData: Array<{ value: string; label: string }>;
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

const Select = (props: IProps) => {
  const {
    placeholder,
    selectData,
    label,
    className,
    value,
    onChange,
    ...rest
  } = props;
  return (
    <ShadSelect
      defaultValue={value}
      onValueChange={(value) => {
        onChange(value);
      }}
      {...rest}
    >
      <SelectGroup>
        <RenderIf condition={!!label}>
          <SelectLabel className="pl-0">{label}</SelectLabel>
        </RenderIf>
        <SelectTrigger
          className={cn("w-full h-[54px] rounded-[10px]", {
            [`${className}`]: !!className,
          })}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {selectData.map((sel, index) => (
            <SelectItem key={index} value={sel.value}>
              {sel.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectGroup>
    </ShadSelect>
  );
};

export default Select;
