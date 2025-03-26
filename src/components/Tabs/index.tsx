"use client";

import React, { FC } from "react";
import {
  Tabs as ShadCNTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { capitaize, cn } from "@/lib/utils";
import { usePomodoroContext } from "@/store/timer/pomodoroContext";
import { focusLevels, FocusLevelType } from "@/lib/utils/static";

interface TabItem {
  value: string;
  rate: number;
  label?: string;
  Component: React.ElementType;
}

interface IProps {
  tabs: TabItem[];
}

const Tabs: FC<IProps> = ({ tabs }) => {
  const {
    state: { focusLevel },
  } = usePomodoroContext();

  const activeFocusLevel = focusLevels.find(
    (item) => Object.keys(item)[0] === focusLevel
  );

  const activeFocusLevelValues =
    activeFocusLevel![focusLevel as FocusLevelType];

  return (
    <ShadCNTabs
      defaultValue={tabs[0].value}
      className="w-3/4 items-center gap-15"
    >
      <TabsList>
        {tabs?.map(({ value, label, rate }) => (
          <TabsTrigger
            key={value}
            value={value}
            className={cn("text-[#069668]", {
              "text-[#2463EB]": value === "timer",
            })}
          >
            <>
              {(label && capitaize(label)) || capitaize(value)}
              <span className="font-extrabold ml-1.5">{rate}</span>
            </>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs?.map(({ value, Component }) => {
        return (
          <TabsContent key={value} value={value}>
            {Component && (
              <Component
                value={value}
                activeFocusLevelValues={activeFocusLevelValues}
                focusLevel={focusLevel}
                className={cn("text-[#069668] border-[#D5EAE1]", {
                  "text-[#2463EB] border-[#d5e0fb]": value === "timer",
                })}
              />
            )}
          </TabsContent>
        );
      })}
    </ShadCNTabs>
  );
};

export default Tabs;
