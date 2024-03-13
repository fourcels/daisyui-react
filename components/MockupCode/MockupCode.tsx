import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps } from "../types";
import { MockupCodeLine, MockupCodeLineProps } from "./MockupCodeLine";

export type { MockupCodeLineProps };

export type MockupCodeProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps;

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
