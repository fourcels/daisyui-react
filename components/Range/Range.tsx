import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";

import React, { ReactNode, forwardRef } from "react";

export type RangeProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "color"
> &
  ComponentBaseProps & {
    size?: ComponentSize;
    color?: Exclude<ComponentColor, "neutral" | "ghost">;
    measure?: boolean;
    wrapperClassName?: string;
  };

export const Range = forwardRef<HTMLInputElement, RangeProps>(
  (
    {
      wrapperClassName,
      measure = true,
      size,
      color,
      dataTheme,
      className,
      ...props
    },
    ref
  ) => {
    const sizes = {
      lg: "range-lg",
      md: "range-md",
      sm: "range-sm",
      xs: "range-xs",
    };
    const colors = {
      primary: "range-primary",
      secondary: "range-secondary",
      accent: "range-accent",
      info: "range-info",
      success: "range-success",
      warning: "range-warning",
      error: "range-error",
    };

    const classes = twMerge(
      "range",
      size && sizes[size],
      color && colors[color],
      className
    );

    const showMeasure = measure && props.step;

    const step = props.step !== undefined ? Number(props.step) : 1;
    const min = props.min !== undefined ? Number(props.min) : 0;
    const max = props.max !== undefined ? Number(props.max) : 100;

    const numTicks = Math.max(Math.ceil((max - min) / step), 1) + 1;
    return (
      <div className={twMerge("range-wrapper w-full", wrapperClassName)}>
        <input
          type="range"
          {...props}
          ref={ref}
          data-theme={dataTheme}
          className={classes}
        />
        {showMeasure && (
          <div className="w-full flex justify-between text-xs px-2">
            {[...Array(numTicks)].map((_, i) => (
              <span key={i}>|</span>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Range.displayName = "Range";
