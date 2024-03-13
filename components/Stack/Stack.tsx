import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps } from "../types";

export type StackProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps;

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge("stack", className);
    return (
      <div {...props} className={classes} ref={ref} data-theme={dataTheme} />
    );
  }
);

Stack.displayName = "Stack";
