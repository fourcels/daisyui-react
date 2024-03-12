import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";

export type BadgeProps = Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  "color" | "size"
> &
  ComponentBaseProps & {
    color?: ComponentColor;
    size?: ComponentSize;
    outline?: boolean;
  };

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { children, color, size, outline, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const colors = {
      neutral: "badge-neutral",
      primary: "badge-primary",
      secondary: "badge-secondary",
      accent: "badge-accent",
      info: "badge-info",
      success: "badge-success",
      warning: "badge-warning",
      error: "badge-error",
      ghost: "badge-ghost",
    };
    const sizes = {
      lg: "badge-lg",
      md: "badge-md",
      sm: "badge-sm",
      xs: "badge-xs",
    };

    const classes = twMerge(
      "badge",
      color && colors[color],
      size && sizes[size],
      outline && "badge-outline",
      className
    );

    return (
      <span {...props} ref={ref} data-theme={dataTheme} className={classes}>
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
