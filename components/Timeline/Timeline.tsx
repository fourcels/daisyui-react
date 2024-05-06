import { twMerge } from "tailwind-merge";

import React, { ReactElement, forwardRef } from "react";
import { ComponentBaseProps, ListOrItem } from "../types";
import { TimelineItem, TimelineItemProps } from "./TimelineItem";
import { TimelineStart, TimelineStartProps } from "./TimelineStart";
import { TimelineMiddle, TimelineMiddleProps } from "./TimelineMiddle";
import { TimelineEnd, TimelineEndProps } from "./TimelineEnd";

export type {
  TimelineItemProps,
  TimelineStartProps,
  TimelineMiddleProps,
  TimelineEndProps,
};

export type TimelineProps = Omit<
  React.HTMLAttributes<HTMLUListElement>,
  "children"
> &
  ComponentBaseProps & {
    children?: ListOrItem<ReactElement>;
    vertical?: boolean;
    snap?: boolean;
    compact?: boolean;
    responsive?: boolean;
    middle?: boolean;
  };

const TimelineInner = forwardRef<HTMLUListElement, TimelineProps>(
  (
    {
      middle,
      responsive,
      compact,
      snap,
      vertical,
      children,
      dataTheme,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "timeline",
      vertical && "timeline-vertical",
      snap && "timeline-snap-icon",
      compact && "timeline-compact",
      responsive && "timeline-vertical lg:timeline-horizontal",
      className
    );

    const content = React.useMemo(() => {
      if (!children) {
        return null;
      }

      const count = React.Children.count(children);
      if (count <= 1) {
        return children;
      }
      return React.Children.map(children, (child, idx) =>
        React.cloneElement(child, {
          connect: idx === 0 ? "end" : idx === count - 1 ? "start" : "both",
          middle,
        })
      );
    }, [children, middle]);

    return (
      <ul className={classes} ref={ref} data-theme={dataTheme} {...props}>
        {content}
      </ul>
    );
  }
);
TimelineInner.displayName = "Timeline";

export const Timeline = Object.assign(TimelineInner, {
  Item: TimelineItem,
  Start: TimelineStart,
  Middle: TimelineMiddle,
  End: TimelineEnd,
});
