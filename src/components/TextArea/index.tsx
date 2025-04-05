"use client";
import React from "react";

import { type FieldError, type UseFormRegister } from "react-hook-form";

import { Textarea as ShadTextarea } from "../ui/textarea";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

interface InputProps<T extends object>
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  containerClass?: string;
  register?: UseFormRegister<T>;
  error?: FieldError;
  subText?: string;
}

/**
 *
 * NOTE: Must be used in a Form(shadcn form)
 */

const TextArea = ({
  label,
  containerClass,
  error,
  id,
  required,
  subText,
  ...rest
}: InputProps<object>) => {
  return (
    <FormItem
      className={cn(
        "space-y-0",
        { "flex flex-col gap-1": !!label },
        { [`${containerClass}`]: !!containerClass }
      )}
    >
      {label ? (
        <FormLabel
          className={cn(
            "text-sm font-medium leading-[1.4rem] text-secondary-100",
            {
              "text-danger-100": !!error,
            }
          )}
          htmlFor={id}
        >
          {label} {required && <span className="text-danger-50">*</span>}
        </FormLabel>
      ) : null}
      <FormControl className="">
        <div className="relative">
          <ShadTextarea
            className="!mt-0 border border-neutral-400 focus:ring-transparent focus-visible:ring-transparent ]"
            id={id}
            {...rest}
          />
        </div>
      </FormControl>
      {!!error && <FormMessage className="text-xs" />}
      {subText && (
        <p className="mt-0.5 text-xs font-normal leading-4 text-neutral-600">
          {subText}
        </p>
      )}
    </FormItem>
  );
};

export default TextArea;
