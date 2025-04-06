import React, { FC } from "react";
import Button from "../Button";
import { SVGIcons } from "../shared";

interface ISubCustomize {
  title: string;
  returnFN: (value: string | null) => void;
  children: React.ReactNode;
}

const SubSettingsContainter: FC<ISubCustomize> = ({
  title,
  children,
  returnFN,
}) => {
  const { ArrowBackIcon } = SVGIcons;

  return (
    <div className="w-90 p-2">
      <div className="flex items-center gap-2 justify-left text-lg font-extrabold text-[#334154] ">
        <Button
          variant="ghost"
          className="w-10 h-10"
          size="icon"
          onClick={() => returnFN(null)}
        >
          <ArrowBackIcon
            className="tab-icon"
            style={{ width: "2rem", height: "2rem" }}
          />
        </Button>
        {`Customize ${title}`}
      </div>
      {children}
    </div>
  );
};

export default SubSettingsContainter;
