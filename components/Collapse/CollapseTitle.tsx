import React, { forwardRef } from "react";
import { ComponentBaseProps, ComponentDirection } from "../types";
import { twMerge } from "tailwind-merge";

export type CollapseTitleProps = React.HTMLAttributes<HTMLDivElement>;

export const CollapseTitle = forwardRef<HTMLDivElement, CollapseTitleProps>(
  ({ className, ...props }, ref) => {
    const classes = twMerge("collapse-title text-xl font-medium", className);

    return <div ref={ref} className={classes} {...props} />;
  }
);

CollapseTitle.displayName = "CollapseTitle";
