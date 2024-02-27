import { twMerge } from "tailwind-merge";

import React, { forwardRef } from "react";

export type StatActionsProps = React.HTMLAttributes<HTMLDivElement>;

export const StatActions = forwardRef<HTMLDivElement, StatActionsProps>(
  ({ className, ...props }, ref): JSX.Element => {
    const classes = twMerge("stat-actions flex items-center gap-2", className);

    return <div className={classes} ref={ref} {...props}></div>;
  }
);
StatActions.displayName = "StatActions";
