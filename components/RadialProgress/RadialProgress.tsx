import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor } from "../types";

export type RadialProgressProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "color"
> &
  ComponentBaseProps & {
    color?: Exclude<ComponentColor, "neutral" | "ghost">;
    value?: number;
    size?: number | string;
    thickness?: number | string;
  };

export const RadialProgress = forwardRef<HTMLDivElement, RadialProgressProps>(
  (
    { value, size, thickness, children, color, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const colors = {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      info: "text-info",
      success: "text-success",
      warning: "text-warning",
      error: "text-error",
    };

    const classes = twMerge(
      "radial-progress",
      color && colors[color],
      className
    );

    return (
      <div
        role="progressbar"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
        style={
          {
            "--value": value,
            "--size": typeof size === "number" ? `${size}rem` : size,
            "--thickness":
              typeof thickness === "number" ? `${thickness}rem` : thickness,
          } as React.CSSProperties
        }
      >
        {children ? children : `${value}%`}
      </div>
    );
  }
);

RadialProgress.displayName = "RadialProgress";
