import { twMerge } from "tailwind-merge";

import React, { forwardRef } from "react";
import { ComponentBaseProps, ComponentSize } from "../types";

export type KbdProps = React.HTMLAttributes<HTMLElement> &
  ComponentBaseProps & {
    size?: ComponentSize;
  };

export const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ size, dataTheme, className, ...props }, ref): JSX.Element => {
    const sizes = {
      xs: "kbd-xs",
      sm: "kbd-sm",
      md: "kbd-md",
      lg: "kbd-lg",
    };

    const classes = twMerge("kbd", size && sizes[size], className);

    return (
      <kbd
        className={classes}
        ref={ref}
        data-theme={dataTheme}
        {...props}
      ></kbd>
    );
  }
);
Kbd.displayName = "Kbd";
