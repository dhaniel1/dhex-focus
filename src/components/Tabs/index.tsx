"use client";

import React, { FC } from "react";
import {
  Tabs as ShadCNTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { capitalize, cn } from "@/lib/utils";
import { TimeType } from "@/lib/utils/static";
import { Button } from "..";
import { useMounted } from "@/hooks";
import { useSessionContext, usePomodoroContext } from "@/store/timer";

interface TabItem {
  value: TimeType;
  label?: string;
}

interface IProps {
  tabs: TabItem[];
}

const Tabs: FC<IProps> = ({ tabs }) => {
  const mounted = useMounted();
  const {
    state: { focusLevel },
  } = usePomodoroContext();

  const {
    setActiveTab,
    sessionState,
    activeTab,
    formattedTime,
    start,
    isActive,
    stop,
  } = useSessionContext();

  console.log("I double render - fix me");
  if (!mounted) return null;

  return (
    <ShadCNTabs
      defaultValue={tabs[0].value}
      className="w-3/4 items-center gap-15"
    >
      <TabsList>
        {tabs?.map(({ value, label }) => {
          return (
            <TabsTrigger
              key={value}
              value={value}
              disabled={isActive && value !== activeTab}
              onClick={() => setActiveTab(value)}
              className={cn("text-[#069668]", {
                "text-[#2463EB]": value === "timer",
              })}
            >
              <>
                {(label && capitalize(label)) || capitalize(value)}
                <span className="font-extrabold ml-1.5">
                  {sessionState[value]}
                </span>
              </>
            </TabsTrigger>
          );
        })}
      </TabsList>

      {tabs?.map(({ value }) => {
        return (
          <TabsContent key={value} value={value}>
            <section className="app_timer_main_body">
              <div
                className={cn(
                  "app_timer_main_body_pomodoro text-[#069668] border-[#D5EAE1]",
                  [value === "timer" && "text-[#2463EB] border-[#d5e0fb]"]
                )}
              >
                <div className="app_timer_main_body_pomodoro_content">
                  <h2 className="timer">{formattedTime}</h2>
                  <div className="text-center mt-5 level">
                    <p>Level</p>
                    <p className="font-bold ">{capitalize(focusLevel)}</p>
                  </div>
                </div>
              </div>
              <Button
                variant="primary"
                size="xl"
                label={isActive ? "stop" : "start"}
                onClick={isActive ? stop : start}
                className="bolder uppercase w-full py-10 text-4xl justify-center! rounded-full"
              />
            </section>
          </TabsContent>
        );
      })}
    </ShadCNTabs>
  );
};

export default Tabs;
