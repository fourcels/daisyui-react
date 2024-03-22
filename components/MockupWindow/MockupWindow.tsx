import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps } from "../types";

export type MockupWindowProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    contentClassName?: string;
  };

export const MockupWindow = forwardRef<HTMLDivElement, MockupWindowProps>(
  (
    { contentClassName, children, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge("mockup-window border bg-base-300", className);
    return (
      <div {...props} className={classes} ref={ref} data-theme={dataTheme}>
        <div
          className={twMerge(
            "flex justify-center px-4 py-16 bg-base-200",
            contentClassName
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

MockupWindow.displayName = "MockupWindow";
