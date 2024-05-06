import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps } from "../types";

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
  };

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    { vertical, horizontal, children, dataTheme, className, ...props },
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
        {children}
      </div>
    );
  }
);

Toast.displayName = "Toast";
