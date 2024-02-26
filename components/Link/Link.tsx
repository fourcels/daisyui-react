import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor } from "../types";

export type LinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "color"
> &
  ComponentBaseProps & {
    color?: Exclude<ComponentColor, "ghost">;
    hover?: boolean;
  };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { hover, children, color, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const colors = {
      neutral: "link-neutral",
      primary: "link-primary",
      secondary: "link-secondary",
      accent: "link-accent",
      info: "link-info",
      success: "link-success",
      warning: "link-warning",
      error: "link-error",
    };

    const classes = twMerge(
      "link",
      color && colors[color],
      hover && "link-hover",
      className
    );

    return (
      <a {...props} ref={ref} data-theme={dataTheme} className={classes}>
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";
