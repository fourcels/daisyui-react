import React, { useContext } from "react";

type DrawerContext = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  overlay: boolean;
};

export const DrawerContext = React.createContext<DrawerContext | null>(null);

export function useDrawer() {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerContext.Provider");
  }
  return context;
}
