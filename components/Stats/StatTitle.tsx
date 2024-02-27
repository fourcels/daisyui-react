import { twMerge } from "tailwind-merge";

import React, { forwardRef } from "react";

export type StatTitleProps = React.HTMLAttributes<HTMLDivElement>;

export const StatTitle = forwardRef<HTMLDivElement, StatTitleProps>(
  ({ className, ...props }, ref): JSX.Element => {
    const classes = twMerge("stat-title", className);

    return <div className={classes} ref={ref} {...props}></div>;
  }
);
StatTitle.displayName = "StatTitle";
