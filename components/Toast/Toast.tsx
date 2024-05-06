import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentStatus } from "../types";
import { Alert } from "../Alert";

const horizontals = {
  start: "toast-start",
  center: "toast-center",
  end: "toast-end",
};

const verticals = {
  top: "toast-top",
  middle: "toast-middle",
  bottom: "toast-bottom",
};

export type ToastProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    vertical?: keyof typeof verticals;
    horizontal?: keyof typeof horizontals;
    color?: ComponentStatus;
  };

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    { vertical, horizontal, color, children, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "toast",
      vertical ? verticals[vertical] : "toast-bottom",
      horizontal ? horizontals[horizontal] : "toast-center",
      className
    );

    return (
      <div {...props} ref={ref} data-theme={dataTheme} className={classes}>
        <Alert color={color}>{children}</Alert>
      </div>
    );
  }
);

Toast.displayName = "Toast";
