import { twMerge } from "tailwind-merge";

import React, { forwardRef } from "react";
import { ComponentBaseProps } from "../types";

export type StatProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    center?: boolean;
  };

export const Stat = forwardRef<HTMLDivElement, StatProps>(
  ({ center, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge("stat", center && "place-items-center", className);

    return (
      <div
        className={classes}
        ref={ref}
        data-theme={dataTheme}
        {...props}
      ></div>
    );
  }
);
Stat.displayName = "Stat";
