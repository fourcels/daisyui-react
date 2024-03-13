import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps } from "../types";
import {
  MockupBrowserToolbar,
  MockupBrowserToolbarProps,
} from "./MockupBrowserToolbar";

export type { MockupBrowserToolbarProps };

export type MockupBrowserProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps;

const MockupBrowserInner = forwardRef<HTMLDivElement, MockupBrowserProps>(
  ({ dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge("mockup-browser border border-base-300", className);
    return (
      <div {...props} className={classes} ref={ref} data-theme={dataTheme} />
    );
  }
);

MockupBrowserInner.displayName = "MockupBrowser";

export const MockupBrowser = Object.assign(MockupBrowserInner, {
  Toolbar: MockupBrowserToolbar,
});
