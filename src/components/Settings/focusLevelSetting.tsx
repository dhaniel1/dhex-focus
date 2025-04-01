import { capitalize } from "@/lib/utils";
import { focusLevels, FocusLevelType } from "@/lib/utils/static";
import { usePomodoroContext } from "@/store";
import { POMODOROACTIONTYPE } from "@/store/timer/pomodoroActions";
import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const FocusLevelSetting = () => {
  const {
    state: { focusLevel },
    dispatch,
  } = usePomodoroContext();

  return (
    <div className="flex flex-col gap-4 items-left space-x-2 text-lg text-[#334154] font-bold mt-4 w-full justify-between">
      <div
        id="volume level"
        className="flex flex-col w-full gap-6 justify-between m-0"
      >
        <RadioGroup
          defaultValue={focusLevel}
          onValueChange={(value) => {
            dispatch({
              type: POMODOROACTIONTYPE.UpdateFocusLevel,
              payload: value,
            });
          }}
        >
          {focusLevels.map((focusLevel, index) => {
            const title = Object.keys(focusLevel)[0];
            const value = focusLevel[title as FocusLevelType];

            return (
              <div className="w-full flex gap-6 items-start" key={index}>
                <RadioGroupItem id={title} value={title} className="mt-2" />

                <label htmlFor={title} className="w-full cursor-pointer">
                  <div className="flex flex-col gap-1 justify-between w-full font-bold">
                    <p>{capitalize(title)}</p>
                    <p className="font-normal">{`${value!["timer"]} min . ${
                      value!["rest"]
                    } min . ${value!["longRest"]} min`}</p>
                  </div>
                </label>
              </div>
            );
          })}
        </RadioGroup>
      </div>
    </div>
  );
};

export default FocusLevelSetting;
