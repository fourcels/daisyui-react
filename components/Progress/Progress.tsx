import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor } from "../types";

export type ProgressProps = Omit<
  React.ProgressHTMLAttributes<HTMLProgressElement>,
  "color"
> &
  ComponentBaseProps & {
    color?: Exclude<ComponentColor, "neutral" | "ghost">;
  };

export const Progress = forwardRef<HTMLProgressElement, ProgressProps>(
  ({ children, color, dataTheme, className, ...props }, ref): JSX.Element => {
    const colors = {
      primary: "progress-primary",
      secondary: "progress-secondary",
      accent: "progress-accent",
      info: "progress-info",
      success: "progress-success",
      warning: "progress-warning",
      error: "progress-error",
    };

    const classes = twMerge("progress", color && colors[color], className);

    return (
      <progress {...props} ref={ref} data-theme={dataTheme} className={classes}>
        {children}
      </progress>
    );
  }
);

Progress.displayName = "Progress";
