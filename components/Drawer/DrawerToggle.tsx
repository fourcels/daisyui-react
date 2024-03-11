import React from "react";
import { useDrawer } from "./DrawerContext";

export type DrawerToggleProps = {
  children: React.ReactElement;
};

export const DrawerToggle = ({ children }: DrawerToggleProps) => {
  const { setOpen } = useDrawer();

  return React.cloneElement(children, {
    onClick: () => setOpen((open) => !open),
  });
};

DrawerToggle.displayName = "DrawerToggle";
