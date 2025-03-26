import React, { FC } from "react";

import { Switch as ShadCNSwitch } from "@/components/ui/switch";
import { SwitchProps } from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

// interface ISwitch extends SwitchProps {}

const Switch: FC<SwitchProps> = ({ className, ...rest }) => {
  return <ShadCNSwitch className={cn("h-8.5 w-16", className)} {...rest} />;
};

export default Switch;
