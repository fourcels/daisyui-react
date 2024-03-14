import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor } from "../types";
import { Artboard } from "../Artboard";

export type MockupPhoneProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "color"
> &
  ComponentBaseProps & {
    color?: Exclude<ComponentColor, "ghost">;
    camera?: boolean;
  };

export const MockupPhone = forwardRef<HTMLDivElement, MockupPhoneProps>(
  (
    { color, camera = true, children, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const colors = {
      neutral: "border-neutral",
      primary: "border-primary",
      secondary: "border-secondary",
      accent: "border-accent",
      info: "border-info",
      success: "border-success",
      warning: "border-warning",
      error: "border-error",
    };

    const classes = twMerge("mockup-phone", color && colors[color], className);
    return (
      <div {...props} className={classes} ref={ref} data-theme={dataTheme}>
        {camera && <div className="camera"></div>}
        <div className="display">{children}</div>
      </div>
    );
  }
);

MockupPhone.displayName = "MockupPhone";
