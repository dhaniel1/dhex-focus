"use client";

import React, { JSX } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { routes } from "@/lib/routes";
import { svgs } from "../shared/svgs";
import { sideNavTabs } from "@/lib/utils/static";

export interface Itab {
  title: string;
  url: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

function Tabs() {
  const pathName = usePathname();

  return (
    <div className="app_layout_content_aside_items">
      {sideNavTabs.map(({ title, icon: Icon, url }) => {
        const isActive = pathName.includes(title.toLowerCase());

        return (
          <Link
            href={url}
            key={title}
            className={clsx("app_layout_content_aside_items_item", {
              active: isActive,
            })}
          >
            <Icon className="tab-icon" />
            <p>{title}</p>
          </Link>
        );
      })}
    </div>
  );
}

const Sidenav = () => {
  return (
    <aside className="app_layout_content_aside">
      <Link href={routes.home.path}>
        <Image
          src={svgs.dhexFocus}
          width={154}
          height={37}
          alt={"App Logo"}
          className="app_layout_content_aside_logo"
        />
      </Link>

      <Tabs />
    </aside>
  );
};

export default Sidenav;
