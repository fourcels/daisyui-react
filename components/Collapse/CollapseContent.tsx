import React, { forwardRef } from "react";
import { ComponentBaseProps, ComponentDirection } from "../types";
import { twMerge } from "tailwind-merge";

export type CollapseContentProps = React.HTMLAttributes<HTMLDivElement>;

export const CollapseContent = forwardRef<HTMLDivElement, CollapseContentProps>(
  ({ className, ...props }, ref) => {
    const classes = twMerge("collapse-content", className);

    return <div ref={ref} className={classes} {...props} />;
  }
);

CollapseContent.displayName = "CollapseContent";
