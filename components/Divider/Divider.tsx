import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor } from "../types";
import { forwardRef } from "react";

export type DividerProps = Omit<React.HTMLAttributes<HTMLDivElement>, "color"> &
  ComponentBaseProps & {
    direction?: "vertical" | "horizontal";
    responsive?: boolean;
    position?: "start" | "center" | "end";
    color?: Exclude<ComponentColor, "ghost">;
  };

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      children,
      direction,
      responsive,
      color,
      position,
      dataTheme,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const directions = {
      vertical: "divider-vertical",
      horizontal: "divider-horizontal",
    };
    const colors = {
      neutral: "divider-neutral",
      primary: "divider-primary",
      secondary: "divider-secondary",
      accent: "divider-accent",
      info: "divider-info",
      success: "divider-success",
      warning: "divider-warning",
      error: "divider-error",
    };

    const positions = {
      start: "divider-start",
      center: "divider-center",
      end: "divider-end",
    };

    const classes = twMerge(
      "divider",
      responsive && "lg:divider-horizontal",
      direction && directions[direction],
      color && colors[color],
      position && positions[position],
      className
    );

    return (
      <div
        role="separator"
        {...props}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
Divider.displayName = "Divider";
