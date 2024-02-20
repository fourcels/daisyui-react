import { twMerge } from "tailwind-merge";

import React, { forwardRef } from "react";

export type StatFigureProps = React.HTMLAttributes<HTMLDivElement>;

export const StatFigure = forwardRef<HTMLDivElement, StatFigureProps>(
  ({ className, ...props }, ref): JSX.Element => {
    const classes = twMerge("stat-figure", className);

    return <div className={classes} ref={ref} {...props}></div>;
  }
);
StatFigure.displayName = "StatFigure";
