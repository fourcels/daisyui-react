import { twMerge } from "tailwind-merge";

import React, { ReactElement, forwardRef } from "react";
import { ComponentBaseProps, ListOrItem } from "../types";

import { StatTitle, StatTitleProps } from "./StatTitle";
import { StatValue, StatValueProps } from "./StatValue";
import { StatDesc, StatDescProps } from "./StatDesc";
import { StatFigure, StatFigureProps } from "./StatFigure";
import { StatActions, StatActionsProps } from "./StatActions";
import { Stat, StatProps } from "./Stat";

export type {
  StatTitleProps,
  StatValueProps,
  StatDescProps,
  StatFigureProps,
  StatActionsProps,
  StatProps,
};

export type StatsProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> &
  ComponentBaseProps & {
    children?: ListOrItem<ReactElement>;
    center?: boolean;
    vertical?: boolean;
    responsive?: boolean;
  };

const StatsInner = forwardRef<HTMLDivElement, StatsProps>(
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
StatsInner.displayName = "Stats";

export const Stats = Object.assign(StatsInner, {
  Title: StatTitle,
  Value: StatValue,
  Desc: StatDesc,
  Figure: StatFigure,
  Actions: StatActions,
  Stat,
});
