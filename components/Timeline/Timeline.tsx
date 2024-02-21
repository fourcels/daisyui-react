import { twMerge } from "tailwind-merge";

import React, { ReactNode, forwardRef } from "react";
import { ComponentBaseProps, ComponentSize } from "../types";

export type TimelineProps = React.HTMLAttributes<HTMLUListElement> &
  ComponentBaseProps;

const TimelineInner = forwardRef<HTMLUListElement, TimelineProps>(
  ({ dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge("timeline", className);

    return (
      <ul className={classes} ref={ref} data-theme={dataTheme} {...props}></ul>
    );
  }
);
TimelineInner.displayName = "Timeline";

export const Timeline = Object.assign(TimelineInner, {});
