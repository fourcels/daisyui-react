import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type TimelineEndProps = React.HTMLAttributes<HTMLDivElement> & {
  box?: boolean;
};

export const TimelineEnd = forwardRef<HTMLDivElement, TimelineEndProps>(
  ({ box, className, ...props }, ref): JSX.Element => {
    const classes = twMerge("timeline-end ", box && "timeline-box", className);
    return <div ref={ref} className={classes} {...props}></div>;
  }
);
TimelineEnd.displayName = "TimelineEnd";
