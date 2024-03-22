import React, { ReactElement, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ListOrItem } from "../types";
import { MockupCodeLine, MockupCodeLineProps } from "./MockupCodeLine";

export type { MockupCodeLineProps };

export type MockupCodeProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> &
  ComponentBaseProps & {
    children?: ListOrItem<ReactElement>;
  };

const MockupCodeInner = forwardRef<HTMLDivElement, MockupCodeProps>(
  ({ dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge("mockup-code", className);
    return (
      <div {...props} className={classes} ref={ref} data-theme={dataTheme} />
    );
  }
);

MockupCodeInner.displayName = "MockupCode";

export const MockupCode = Object.assign(MockupCodeInner, {
  Line: MockupCodeLine,
});
