"use client";

import React from "react";
import { Button, Popover, Settings } from "..";
import { SettingsIcon, RestartIcon, GlobeIcon } from "../shared/svgs";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";
import Languages from "../Language";
import Dialog from "../Dialog";
import { usePersistedState } from "@/hooks";
import { sessionCountInitialState, TimeValues } from "@/lib/utils/static";

const NavActions = () => {
  const [, setPersistedState] = usePersistedState<TimeValues>(
    "session-count",
    sessionCountInitialState
  );

  function confirmRestart() {
    setPersistedState(sessionCountInitialState);
  }

  return (
    <div className="app_layout_content_main_navbar_actions">
      <Button label="New Beta!" variant="primary" className="text-lg" />

      <Popover
        triggerComponent={
          <Button
            label="Customize"
            variant="ghost"
            className="text-lg"
            icon={SettingsIcon}
            iconDimension="1.1rem"
          />
        }
      >
        <Settings />
      </Popover>

      <Dialog
        dialogTitle="Restart Session"
        dialogDescription={`Are you sure you want to restart your session?`}
        dialogContent={<></>}
        confirmAction={confirmRestart}
      >
        <Button
          label="Restart Session"
          variant="ghost"
          className="text-lg gap-1!"
          icon={RestartIcon}
          iconDimension="2rem"
        />
      </Dialog>

      <Popover
        triggerComponent={
          <Button
            label="EN"
            variant="ghost"
            className="text-lg gap-1!"
            icon={GlobeIcon}
            iconDimension="1.5rem"
          />
        }
      >
        <Languages />
      </Popover>
    </div>
  );
};

const NavBar = () => {
  const pathname = usePathname();

  let displayTitle: string = "";

  if (pathname.includes(routes.timer.path)) {
    displayTitle = "Pomodoro Timer";
  } else if (pathname.includes(routes.tasks.path)) {
    displayTitle = "Todo Tasks";
  }

  return (
    <header className="app_layout_content_main_navbar">
      <h2 className="app_layout_content_main_navbar_title">{displayTitle}</h2>
      <NavActions />
    </header>
  );
};

export default NavBar;
