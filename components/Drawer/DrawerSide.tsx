import React from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps } from "../types";

export type DrawerSideProps = React.HTMLAttributes<HTMLDivElement>;

export const DrawerSide = React.forwardRef<HTMLDivElement, DrawerSideProps>(
  ({ children, className, ...props }, ref) => {
    const classes = twMerge("drawer-side", className);

    return (
      <div {...props} ref={ref} className={classes}>
        {children}
      </div>
    );
  }
);

DrawerSide.displayName = "DrawerSide";
