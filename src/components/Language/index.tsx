"use client";

import React from "react";
import Button from "../Button";
import { language } from "@/lib/utils/static";
import { usePomodoroContext } from "@/store";
import { SVGIcons } from "../shared";
import { POMODOROACTIONTYPE } from "@/store/timer/pomodoroActions";

const Languages = () => {
  const {
    state: { preferedLanguage },
    dispatch,
  } = usePomodoroContext();

  return (
    <div className="flex w-40 flex-col">
      {language.map((title) => {
        return (
          <Button
            size="lg"
            key={title}
            variant="ghost"
            icon={SVGIcons.CheckIcon}
            iconDimension="2rem"
            iconClassName={
              preferedLanguage !== title.toLowerCase()
                ? "text-white fill-none"
                : ""
            }
            className="w-full justify-start text-lg pl-0! text-left"
            onClick={() =>
              dispatch({
                type: POMODOROACTIONTYPE.UpdateLanguagePreference,
                payload: title,
              })
            }
          >
            {title}
          </Button>
        );
      })}
    </div>
  );
};

export default Languages;
