import { capitaize } from "@/lib/utils";
import {
  focusLevels,
  FocusLevelType,
  type FocusLevel,
} from "@/lib/utils/static";
import { usePomodoroContext } from "@/store";
import { POMODOROACTIONTYPE } from "@/store/timer/pomodoroActions";
import React, { FC } from "react";

interface IRadioComp {
  focusLevelObj: FocusLevel;
}

const RadioComp: FC<IRadioComp> = ({ focusLevelObj }) => {
  const {
    state: { focusLevel },
    dispatch,
  } = usePomodoroContext();

  const title = Object.keys(focusLevelObj)[0];
  const value = focusLevelObj[title as FocusLevelType];

  return (
    <div className="w-full flex gap-6 items-start">
      <input
        id={title}
        type="radio"
        name="focus-level"
        value={title}
        className="mt-2"
        checked={title === focusLevel}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value);
          dispatch({
            type: POMODOROACTIONTYPE.UpdateFocusLevel,
            payload: e.target.value,
          });
        }}
      />

      <label htmlFor={title} className="w-full cursor-pointer">
        <div className="flex flex-col gap-1 justify-between w-full font-bold">
          <p>{capitaize(title)}</p>
          <p className="font-normal">{`${value!["timer"]} min . ${
            value!["rest"]
          } min . ${value!["longRest"]} min`}</p>
        </div>
      </label>
    </div>
  );
};

const FocusLevelSetting = () => {
  return (
    <div className="flex flex-col gap-4 items-left space-x-2 text-lg text-[#334154] font-bold mt-4 w-full justify-between">
      <div
        id="volume level"
        className="flex flex-col w-full gap-6 justify-between items-center m-0"
      >
        {focusLevels.map((focusLevel) => {
          return (
            <RadioComp
              key={Object.keys(focusLevel)[0]}
              focusLevelObj={focusLevel}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FocusLevelSetting;
