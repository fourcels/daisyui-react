import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type TimelineStartProps = React.HTMLAttributes<HTMLDivElement> & {
  box?: boolean;
};

export const TimelineStart = forwardRef<HTMLDivElement, TimelineStartProps>(
  ({ box, className, ...props }, ref): JSX.Element => {
    const classes = twMerge("timeline-start", box && "timeline-box", className);
    return <div ref={ref} className={classes} {...props}></div>;
  }
);
TimelineStart.displayName = "TimelineStart";
