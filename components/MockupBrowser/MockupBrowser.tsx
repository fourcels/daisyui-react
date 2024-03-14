import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps } from "../types";

export type MockupBrowserProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    toolbar?: string;
  };

export const MockupBrowser = forwardRef<HTMLDivElement, MockupBrowserProps>(
  ({ toolbar, children, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge("mockup-browser border border-base-300", className);
    return (
      <div {...props} className={classes} ref={ref} data-theme={dataTheme}>
        {toolbar && (
          <div className="mockup-browser-toolbar">
            <div className="input border border-base-300">{toolbar}</div>
          </div>
        )}
        {children}
      </div>
    );
  }
);

MockupBrowser.displayName = "MockupBrowser";
