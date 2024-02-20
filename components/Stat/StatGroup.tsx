import { twMerge } from "tailwind-merge";

import React, { ReactElement, forwardRef } from "react";
import { ComponentBaseProps, ListOrItem } from "../types";

export type StatGroupProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> &
  ComponentBaseProps & {
    children?: ListOrItem<ReactElement>;
    center?: boolean;
    vertical?: boolean;
    responsive?: boolean;
  };

export const StatGroup = forwardRef<HTMLDivElement, StatGroupProps>(
  (
    { responsive, vertical, center, children, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "stats shadow",
      vertical && "stats-vertical",
      responsive && "stats-vertical lg:stats-horizontal",
      className
    );

    return (
      <div className={classes} ref={ref} data-theme={dataTheme} {...props}>
        {children &&
          React.Children.map(children, (child) =>
            React.cloneElement(child, {
              center,
            })
          )}
      </div>
    );
  }
);
StatGroup.displayName = "StatGroup";
