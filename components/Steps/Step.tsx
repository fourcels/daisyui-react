import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { ComponentColor } from "../types";

export type StepProps = Omit<React.LiHTMLAttributes<HTMLLIElement>, "color"> & {
  color?: Exclude<ComponentColor, "ghost">;
};

export const Step = forwardRef<HTMLLIElement, StepProps>(
  ({ color, className, children, ...props }, ref): JSX.Element => {
    const colors = {
      neutral: "step-neutral",
      primary: "step-primary",
      secondary: "step-secondary",
      accent: "step-accent",
      info: "step-info",
      success: "step-success",
      warning: "step-warning",
      error: "step-error",
    };

    const classes = twMerge("step", color && colors[color], className);

    return (
      <li ref={ref} className={classes} {...props}>
        {children}
      </li>
    );
  }
);
Step.displayName = "Step";
