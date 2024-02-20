import { twMerge } from "tailwind-merge";

import React, { forwardRef } from "react";
import { ComponentBaseProps } from "../types";
import { StatTitle, StatTitleProps } from "./StatTitle";
import { StatValue, StatValueProps } from "./StatValue";
import { StatDesc, StatDescProps } from "./StatDesc";
import { StatGroup, StatGroupProps } from "./StatGroup";
import { StatFigure, StatFigureProps } from "./StatFigure";
import { StatActions, StatActionsProps } from "./StatActions";

export type {
  StatTitleProps,
  StatValueProps,
  StatDescProps,
  StatGroupProps,
  StatFigureProps,
  StatActionsProps,
};

export type StatProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    center?: boolean;
  };

const StatInner = forwardRef<HTMLDivElement, StatProps>(
  ({ center, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge("stat", center && "place-items-center", className);

    return (
      <div
        className={classes}
        ref={ref}
        data-theme={dataTheme}
        {...props}
      ></div>
    );
  }
);
StatInner.displayName = "Stat";

export const Stat = Object.assign(StatInner, {
  Title: StatTitle,
  Value: StatValue,
  Desc: StatDesc,
  Figure: StatFigure,
  Actions: StatActions,
  Group: StatGroup,
});
