import React, { forwardRef } from "react";
import { ComponentBaseProps } from "../types";
import { twMerge } from "tailwind-merge";

export type CollapseProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "title"
> &
  ComponentBaseProps & {
    bordered?: boolean;
    open?: boolean;
    icon?: "arrow" | "plus";
    title?: React.ReactNode;
    titleClassName?: string;
    contentClassName?: string;
  };

export const Collapse = forwardRef<HTMLDivElement, CollapseProps>(
  (
    {
      titleClassName,
      contentClassName,
      bordered = true,
      title,
      open,
      icon,
      children,
      dataTheme,
      className,
      ...props
    },
    ref
  ) => {
    const icons = {
      arrow: "collapse-arrow",
      plus: "collapse-plus",
    };

    const classes = twMerge(
      "collapse bg-base-200",
      icon && icons[icon],
      open && "collapse-open",
      bordered && "border border-base-300",
      className
    );
    return (
      <div ref={ref} className={classes} data-theme={dataTheme} {...props}>
        <input type="checkbox" />
        <div
          className={twMerge(
            "collapse-title text-xl font-medium",
            titleClassName
          )}
        >
          {title}
        </div>
        <div className={twMerge("collapse-content", contentClassName)}>
          {children}
        </div>
      </div>
    );
  }
);

Collapse.displayName = "Collapse";
