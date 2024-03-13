import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type MockupBrowserToolbarProps = React.HTMLAttributes<HTMLDivElement>;
export const MockupBrowserToolbar = forwardRef<
  HTMLDivElement,
  MockupBrowserToolbarProps
>(({ children, className, ...props }, ref): JSX.Element => {
  const classes = twMerge("mockup-browser-toolbar", className);
  return (
    <div {...props} className={classes} ref={ref}>
      <div className="input border border-base-300">{children}</div>
    </div>
  );
});

MockupBrowserToolbar.displayName = "MockupBrowserToolbar";
