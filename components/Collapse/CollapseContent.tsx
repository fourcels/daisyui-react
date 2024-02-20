import React, { forwardRef } from "react";
import { ComponentBaseProps, ComponentDirection } from "../types";
import { twMerge } from "tailwind-merge";

export type CollapseContentProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps;

export const CollapseContent = forwardRef<HTMLDivElement, CollapseContentProps>(
  ({ dataTheme, className, ...props }, ref) => {
    const classes = twMerge("collapse-content", className);

    return (
      <div ref={ref} className={classes} data-theme={dataTheme} {...props} />
    );
  }
);

CollapseContent.displayName = "CollapseContent";
