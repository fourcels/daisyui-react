import React from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps } from "../types";

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    open?: boolean;
    end?: boolean;
  };

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ open, children, end, dataTheme, className, ...props }, ref) => {
    const classes = twMerge(
      "drawer",
      end && "drawer-end",
      open && "drawer-open",
      className
    );

    return (
      <div {...props} ref={ref} data-theme={dataTheme} className={classes}>
        {children}
      </div>
    );
  }
);

Drawer.displayName = "Drawer";
