"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer as ShadCNDrawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

interface IDrawer {
  children: React.ReactNode;
  container?: HTMLElement;
  description: string;
  className?: string;
  title: string;
  enableFooter?: boolean;
  drawerContent: React.ReactElement;
}

const Drawer: React.FC<IDrawer> = ({
  children,
  container,
  title,
  description,
  drawerContent,
  enableFooter = true,
  className,
}) => {
  return (
    <ShadCNDrawer container={container}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className={cn("w-fit mx-auto", className)}>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">{drawerContent}</div>
        {enableFooter && (
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
    </ShadCNDrawer>
  );
};

export default Drawer;
