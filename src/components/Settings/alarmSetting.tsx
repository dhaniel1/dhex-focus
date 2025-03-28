"use client";

import React from "react";
import Button from "../Button";
import { usePomodoroContext } from "@/store";
import { POMODOROACTIONTYPE } from "@/store/timer/pomodoroActions";
import { cn } from "@/lib/utils";

const sounds = ["Sound1", "Sound2", "Long", "Mute"];

const SoundsButton = () => {
  const {
    state: {
      alarm: { soundType },
    },
    dispatch,
  } = usePomodoroContext();

  return (
    <div className="flex">
      {sounds.map((item) => {
        return (
          <Button
            key={item}
            variant="outline"
            onClick={() =>
              dispatch({
                type: POMODOROACTIONTYPE.UpdateAlarmType,
                payload: item,
              })
            }
            className={cn(
              "font-medium text-md not-first:rounded-tl-none not-first:rounded-bl-none not-last:rounded-tr-none not-last:rounded-br-none",
              {
                "bg-accent font-bold text-accent-foreground":
                  soundType.toLowerCase() == item.toLowerCase(),
              }
            )}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
};

const AlarmSettings = () => {
  const {
    state: {
      alarm: { alarmVolumeLevel },
    },
    dispatch,
  } = usePomodoroContext();

  return (
    <div className="flex flex-col gap-4 items-left space-x-2 text-lg text-[#334154] font-bold mt-4 w-full justify-between">
      <p>Alarm on Completion</p>
      <SoundsButton />
      <div
        id="volume level"
        className="flex flex-col w-full justify-between items-center m-0"
      >
        <label htmlFor="volume level" className="w-full">
          <div className="flex justify-between w-full font-bold">
            <p>Volume</p>
            <p>{alarmVolumeLevel}</p>
          </div>
        </label>
        <input
          id="volume level"
          type="range"
          min={0}
          value={alarmVolumeLevel}
          step={5}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: POMODOROACTIONTYPE.UpdateAlarmVolumeLevel,
              payload: Number(e.target.value),
            })
          }
          className="w-full!"
        />
      </div>
    </div>
  );
};

export default AlarmSettings;
