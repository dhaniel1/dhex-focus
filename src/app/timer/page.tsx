"use client";

import React, { FC, useState } from "react";
import { Button, Tabs } from "@/components";
import { capitaize } from "@/lib/utils";
import { TimeType, TimeValues } from "@/lib/utils/static";
import { useMounted } from "@/hooks";

interface IBodyProps {
  className: string;
  focusLevel: string;
  activeFocusLevelValues: TimeValues;
  value: TimeType;
}

export const Body: FC<IBodyProps> = ({
  className,
  focusLevel,
  activeFocusLevelValues,
  value,
}) => {
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <section className="app_timer_body">
      <div className={`app_timer_body_pomodoro ${className}`}>
        <div className="app_timer_body_pomodoro_content">
          <h2 className="timer">{`${activeFocusLevelValues[value]}:00`}</h2>
          <div className="text-center mt-5 level">
            <p>Level</p>
            <p className="font-bold ">{capitaize(focusLevel)}</p>
          </div>
        </div>
      </div>
      <Button
        variant="primary"
        size="xl"
        label="start"
        className="bolder uppercase w-full py-10 text-4xl justify-center! rounded-full"
      />
    </section>
  );
};

function Pomodoropage() {
  //TODO: Put this in the store
  const [{ pomodoro, rest, long }] = useState({
    pomodoro: 7,
    rest: 3,
    long: 4,
  });

  return (
    <div className="app_timer">
      <div className="app_timer_intro">
        <Button
          variant="ghost"
          size="lg"
          className="text-2xl font-extrabold"
          label=" Why don't you take a challenge? 😏"
        />
      </div>
      <div className="app_timer_tabs">
        <Tabs
          tabs={[
            {
              value: "timer",
              label: "pomodoro",
              rate: pomodoro,
              Component: Body,
            },
            { value: "rest", rate: rest, Component: Body },
            {
              value: "longRest",
              label: "long rest",
              rate: long,
              Component: Body,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Pomodoropage;
