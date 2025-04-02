import React, { FC, useState } from "react";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { Input as ShadCNInput } from "../ui/input";
import { FieldError } from "react-hook-form";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { icons } from "@/lib/assets/icons";
// import { RenderIf } from "../RenderIf";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  subText?: string;
  details?: string;
}

const Input: FC<InputProps> = ({
  id,
  label,
  error,
  type,
  details,
  subText,
  required,
  ...rest
}) => {
  const [isPasswordField, setIsPasswordField] = useState(type === "password");

  return (
    <FormItem>
      {label && (
        <FormLabel
          className={cn(
            "text-sm font-medium leading-[1.4rem] text-secondary-100",
            {
              "text-danger-100": !!error,
            }
          )}
          htmlFor={id}
        >
          {label}
          {required && <span className="text-danger-50">*</span>}
        </FormLabel>
      )}

      <FormControl>
        <div>
          <div className={cn("relative", { "w-[60%]": details })}>
            <ShadCNInput
              className="!mt-0 border border-neutral-400 focus:ring-transparent focus-visible:ring-transparent"
              id={id}
              // ref={ref}
              type={
                isPasswordField
                  ? "password"
                  : type === "password"
                  ? "text"
                  : type
              }
              {...rest}
            />
            {type === "password" && (
              <Image
                className="absolute w-5 h-5 right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
                width={10}
                height={10}
                src={icons.eye}
                alt={type}
                onClick={() => {
                  setIsPasswordField((prev) => !prev);
                }}
              />
            )}
          </div>
          {details && details}
        </div>
      </FormControl>
      {!!error && <FormMessage className="text-xs" />}
      {subText && (
        <FormDescription className="mt-0.5 text-xs font-normal leading-4 text-neutral-600">
          {subText}
        </FormDescription>
      )}
    </FormItem>
  );
};

export default Input;
