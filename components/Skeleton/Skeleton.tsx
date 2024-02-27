import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps } from "../types";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    circle?: boolean;
  };

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ circle, children, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge("skeleton", circle && "rounded-full", className);

    return (
      <div {...props} ref={ref} data-theme={dataTheme} className={classes}>
        {children}
      </div>
    );
  }
);

Skeleton.displayName = "Skeleton";
