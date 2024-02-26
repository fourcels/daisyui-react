import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentColor } from "../types";

export type BottomNavigationItemProps = Omit<
  React.HTMLAttributes<HTMLButtonElement>,
  "color"
> & {
  disabled?: boolean;
  active?: boolean;
  icon?: React.ReactNode;
  color?: Exclude<ComponentColor, "neutral" | "ghost">;
};

export const BottomNavigationItem = forwardRef<
  HTMLButtonElement,
  BottomNavigationItemProps
>(
  (
    { disabled, active, color, children, icon, className, ...props },
    ref
  ): JSX.Element => {
    const colors = {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      info: "text-info",
      success: "text-success",
      warning: "text-warning",
      error: "text-error",
    };

    const classes = twMerge(
      color && colors[color],
      active && "active",
      disabled && "disabled",
      className
    );

    return (
      <button className={classes} {...props} ref={ref}>
        {icon}
        <span className="btm-nav-label">{children}</span>
      </button>
    );
  }
);

BottomNavigationItem.displayName = "BottomNavigationItem";
