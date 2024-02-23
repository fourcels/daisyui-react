import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import "./Timeline.css";
import { TimelineMiddle } from "./TimelineMiddle";

export type TimelineItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  connect?: "both" | "start" | "end";
  active?: boolean;
  startClassName?: string;
  endClassName?: string;
  middle?: boolean;
};

export const TimelineItem = forwardRef<HTMLLIElement, TimelineItemProps>(
  (
    {
      middle = true,
      active,
      connect,
      className,
      startClassName,
      endClassName,
      children,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge("timeline-item", active && "active", className);

    return (
      <li ref={ref} className={classes} {...props}>
        {(connect === "both" || connect === "start") && (
          <hr className={twMerge("timeline-connect-start", startClassName)} />
        )}
        {middle && <TimelineMiddle />}
        {children}
        {(connect === "both" || connect === "end") && (
          <hr className={twMerge("timeline-connect-end", endClassName)} />
        )}
      </li>
    );
  }
);
TimelineItem.displayName = "TimelineItem";
