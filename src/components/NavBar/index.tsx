"use client";

import React from "react";
import { Button, Popover, Settings } from "..";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";
// import Languages from "../Language";
import Dialog from "../Dialog";

import { useSessionContext } from "@/store";
import { SVGIcons } from "@/lib/assets";
import Image from "next/image";
import { sessionCountInitialState } from "@/store/timer/state";

const NavActions = () => {
  const {
    sessionState: { timer, rest, longRest },
    setSessionState,
  } = useSessionContext();

  const { SettingsIcon, RestartIcon /* GlobeIcon */ } = SVGIcons;

  return (
    <div className="app_layout_content_main_navbar_actions">
      {/* <Button label="New Beta!" variant="primary" className="text-lg" /> */}

      <Popover
        triggerComponent={
          <Button
            label="Customize"
            variant="ghost"
            className="app_layout_content_main_navbar_actions-item"
            iconClassName="hidden md:block"
            icon={SettingsIcon}
            iconDimension="1.1rem"
          />
        }
      >
        <Settings />
      </Popover>

      {!!timer || !!rest || !!longRest ? (
        <Dialog
          dialogTitle="Restart Session"
          dialogDescription={`Are you sure you want to restart your session?`}
          dialogContent={<></>}
          confirmAction={() => setSessionState(sessionCountInitialState)}
        >
          <Button
            label="Restart~Session"
            variant="ghost"
            iconClassName="hidden md:block"
            className="app_layout_content_main_navbar_actions-item"
            icon={RestartIcon}
            iconDimension="2rem"
          />
        </Dialog>
      ) : (
        <Button
          label="Restart~Session"
          variant="ghost"
          className="text-lg gap-1!"
          iconClassName="hidden md:display-block"
          icon={RestartIcon}
          iconDimension="2rem"
          onClick={() => alert("You have no recorded session")}
        />
      )}
      {/*  <Popover
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
      </Popover> */}
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

  const { dhexFocus } = SVGIcons;

  return (
    <header className="app_layout_content_main_navbar">
      <h2 className="app_layout_content_main_navbar-title">{displayTitle}</h2>
      <Image
        className="app_layout_content_main_navbar-mobile "
        width={16}
        height={16}
        src={dhexFocus}
        alt={"App Logo"}
      />
      <NavActions />
    </header>
  );
};

export default NavBar;
