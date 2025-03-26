import React, { FC, ReactNode } from "react";
import {
  Popover as ShadCNPopover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface IProp {
  triggerComponent: string | ReactNode;
  children?: ReactNode;
}

const Popover: FC<IProp> = ({
  triggerComponent = "Open",
  children = <>Place content for the popover here</>,
}) => {
  return (
    <ShadCNPopover>
      <PopoverTrigger asChild>{triggerComponent}</PopoverTrigger>
      <PopoverContent className="w-full">{children}</PopoverContent>
    </ShadCNPopover>
  );
};

export default Popover;
