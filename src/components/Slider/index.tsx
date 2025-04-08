import { cn } from "@/lib/utils";
import { Slider as ShadCNSlider } from "@/components/ui/slider";
import { FC } from "react";
import React from "react";

type SliderProps = React.ComponentProps<typeof ShadCNSlider>;

const Slider: FC<SliderProps> = ({ className, ...props }) => {
  return (
    <ShadCNSlider
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  );
};

export default Slider;
