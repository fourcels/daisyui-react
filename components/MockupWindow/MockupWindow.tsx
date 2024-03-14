import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps } from "../types";

export type MockupWindowProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps;

export const MockupWindow = forwardRef<HTMLDivElement, MockupWindowProps>(
  ({ dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge("mockup-window border border-base-300", className);
    return (
      <div {...props} className={classes} ref={ref} data-theme={dataTheme} />
    );
  }
);

MockupWindow.displayName = "MockupWindow";
