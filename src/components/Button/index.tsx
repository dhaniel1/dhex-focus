import React, { ButtonHTMLAttributes, JSX } from "react";
import { cn } from "@/lib/utils"; // ShadCN's cn utility
import { Button as ShadCNButton } from "@/components/ui/button";
import { Loader } from "..";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  loading?: boolean;
  iconClassName?: string;
  iconDimension?: string;
  iconAfterClassName?: string;
  iconAfterDimension?: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  iconAfter?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  size?: "default" | "sm" | "lg" | "xl" | "icon";
  variant?:
    | "primary"
    | "secondary"
    | "neutral"
    | "tertiary"
    | "danger"
    | "outline"
    | "success"
    | "ghost"
    | "link";
}

const Button = ({
  label,
  icon: Icon,
  loading,
  disabled,
  children,
  className,
  iconClassName,
  iconAfterClassName,
  iconAfter: IconAfter,
  iconDimension = "16px",
  iconAfterDimension = "16px",
  type = "button",
  ...rest
}: IButton) => {
  return (
    <ShadCNButton
      disabled={loading || disabled}
      type={type}
      className={cn(
        "button flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all",
        {
          "cursor-not-allowed bg-neutral-300 border-neutral-500 opacity-50":
            disabled,
          "cursor-progress opacity-85": loading,
        },
        className
      )}
      {...rest}
    >
      {loading && <Loader />}
      {Icon && (
        <Icon
          className={cn("tab-icon", iconClassName)}
          style={{ width: iconDimension, height: iconDimension }}
        />
      )}
      {label || children}
      {IconAfter && (
        <IconAfter
          className={cn("tab-icon", iconAfterClassName)}
          style={{ width: iconAfterDimension, height: iconAfterDimension }}
        />
      )}
    </ShadCNButton>
  );
};

export default Button;
