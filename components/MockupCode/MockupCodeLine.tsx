import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type MockupCodeLineProps = React.HTMLAttributes<HTMLPreElement> & {
  prefix?: string;
};
export const MockupCodeLine = forwardRef<HTMLPreElement, MockupCodeLineProps>(
  ({ prefix, children, className, ...props }, ref): JSX.Element => {
    return (
      <pre {...props} className={className} ref={ref} data-prefix={prefix}>
        <code>{children}</code>
      </pre>
    );
  }
);

MockupCodeLine.displayName = "MockupCodeLine";
