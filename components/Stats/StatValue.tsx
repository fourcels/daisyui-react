import { twMerge } from "tailwind-merge";

import React, { forwardRef } from "react";

export type StatValueProps = React.HTMLAttributes<HTMLDivElement>;

export const StatValue = forwardRef<HTMLDivElement, StatValueProps>(
  ({ className, ...props }, ref): JSX.Element => {
    const classes = twMerge("stat-value", className);

    return <div className={classes} ref={ref} {...props}></div>;
  }
);
StatValue.displayName = "StatValue";
