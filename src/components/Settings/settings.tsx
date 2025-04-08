"use client";

import { settings, SETTINGSTYPE, TimeType } from "@/lib/utils/static";
import React, { FC, useState } from "react";
import Button from "../Button";
import SubSettingsContainter from "./subSettingsContainter";
import FocusLevelSetting from "./focusLevelSetting";
import AlarmSettings from "./alarmSetting";
import AutoStartSetting from "./autoStartSetting";
import NotificationSetting from "./notificationSetting";
import { Separator } from "../ui/separator";
import { useSessionContext } from "@/store/timer/pomodoroContexts";
import { SVGIcons } from "@/lib/assets";

const extra = [
  { label: "Skip to break", action: "rest" },
  { label: "Skip to long break", action: "longRest" },
  ,
];

const Settings: FC = () => {
  const [activeSetting, setActiveSetting] = useState<string | null>(null);
  const { isActive, setActiveTab } = useSessionContext();
  const { ArrowRightIcon } = SVGIcons;

  function makeActive(value: string | null) {
    setActiveSetting(value);
    return;
  }

  if (!activeSetting) {
    return (
      <div className="w-90 flex flex-col">
        {settings.map(({ icon, title }) => {
          return (
            <Button
              key={title}
              icon={icon}
              variant="ghost"
              size="lg"
              iconAfter={ArrowRightIcon}
              disabled={isActive && title === SETTINGSTYPE.FocusLevel}
              className="w-full p-8 pr-4 text-lg font-extrabold"
              iconClassName="fill-pink w-10 h-10"
              iconAfterClassName="ml-auto"
              iconDimension="1.5rem"
              iconAfterDimension="1.5rem"
              onClick={() => makeActive(title)}
            >
              {title}
            </Button>
          );
        })}
        {!isActive && <Separator className="my-4" />}
        {!isActive &&
          extra?.map((item) => {
            return (
              <Button
                key={item?.action}
                variant="ghost"
                size="lg"
                className="w-full justify-start text-left p-7 text-lg "
                onClick={() => setActiveTab(() => item?.action as TimeType)}
              >
                {item?.label}
              </Button>
            );
          })}
      </div>
    );
  }

  if (activeSetting) {
    return (
      <SubSettingsContainter title={activeSetting} returnFN={makeActive}>
        {activeSetting === SETTINGSTYPE.FocusLevel && <FocusLevelSetting />}
        {activeSetting === SETTINGSTYPE.Alarm && <AlarmSettings />}
        {activeSetting === SETTINGSTYPE.AutoStart && <AutoStartSetting />}
        {activeSetting === SETTINGSTYPE.Notification && <NotificationSetting />}
      </SubSettingsContainter>
    );
  }
};

export default Settings;
