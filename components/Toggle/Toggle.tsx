import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";

import { ReactNode, forwardRef } from "react";
import { Label } from "../Label";

export type ToggleProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "color"
> &
  ComponentBaseProps & {
    size?: ComponentSize;
    color?: Exclude<ComponentColor, "neutral" | "ghost">;
    label?: ReactNode;
    labelClassName?: string;
    reverse?: boolean;
  };

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      reverse,
      children,
      label,
      size,
      color,
      dataTheme,
      className,
      labelClassName,
      ...props
    },
    ref
  ) => {
    const sizes = {
      lg: "toggle-lg",
      md: "toggle-md",
      sm: "toggle-sm",
      xs: "toggle-xs",
    };
    const colors = {
      primary: "toggle-primary",
      secondary: "toggle-secondary",
      accent: "toggle-accent",
      info: "toggle-info",
      success: "toggle-success",
      warning: "toggle-warning",
      error: "toggle-error",
    };

    const classes = twMerge(
      "toggle",
      size && sizes[size],
      color && colors[color],
      className
    );

    const toggle = (
      <input
        type="checkbox"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      />
    );

    if (children) {
      return (
        <Label className={labelClassName}>
          {toggle}
          {children}
        </Label>
      );
    }

    if (!label) {
      return toggle;
    }
    return (
      <Label reverse={reverse} className={labelClassName}>
        {toggle}
        <Label.Text>{label}</Label.Text>
      </Label>
    );
  }
);

Toggle.displayName = "Toggle";
