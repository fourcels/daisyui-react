import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentStatus } from "../types";

export type AlertProps = Omit<React.HTMLAttributes<HTMLDivElement>, "color"> &
  ComponentBaseProps & {
    color?: ComponentStatus;
    icon?: React.ReactNode;
    actions?: React.ReactNode;
    contentClassName?: string;
  };

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      contentClassName,
      icon,
      actions,
      children,
      color,
      dataTheme,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const colors = {
      info: "alert-info",
      success: "alert-success",
      warning: "alert-warning",
      error: "alert-error",
    };

    const classes = twMerge("alert", color && colors[color], className);

    return (
      <div
        role="alert"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      >
        {icon}
        <div className={contentClassName}>{children}</div>
        {actions}
      </div>
    );
  }
);

Alert.displayName = "Alert";
