import React, { forwardRef } from "react";
import { ComponentBaseProps } from "../types";
import { twMerge } from "tailwind-merge";
import "./Indicator.css";

export type IndicatorProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    indicator?: React.ReactElement;
    horizontal?: "start" | "center" | "end";
    vertical?: "top" | "middle" | "bottom";
  };

export const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(
  (
    {
      horizontal,
      vertical,
      indicator,
      children,
      dataTheme,
      className,
      ...props
    },
    ref
  ) => {
    const horizontals = {
      start: "indicator-start",
      center: "indicator-center",
      end: "indicator-end",
    };
    const verticals = {
      top: "indicator-top",
      middle: "indicator-middle",
      bottom: "indicator-bottom",
    };

    const classes = twMerge("indicator", className);

    return (
      <div ref={ref} className={classes} {...props}>
        {indicator && (
          <div
            className={twMerge(
              "indicator-item",
              horizontal && horizontals[horizontal],
              vertical && verticals[vertical]
            )}
          >
            {indicator}
          </div>
        )}
        {children}
      </div>
    );
  }
);

Indicator.displayName = "Indicator";
