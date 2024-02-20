import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";

import { ReactNode, forwardRef } from "react";
import { Label } from "../Label";

export type CheckboxProps = Omit<
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

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      reverse,
      label,
      labelClassName,
      size,
      color,
      dataTheme,
      className,
      ...props
    },
    ref
  ) => {
    const sizes = {
      lg: "checkbox-lg",
      md: "checkbox-md",
      sm: "checkbox-sm",
      xs: "checkbox-xs",
    };
    const colors = {
      primary: "checkbox-primary",
      secondary: "checkbox-secondary",
      accent: "checkbox-accent",
      info: "checkbox-info",
      success: "checkbox-success",
      warning: "checkbox-warning",
      error: "checkbox-error",
    };

    const classes = twMerge(
      "checkbox",
      size && sizes[size],
      color && colors[color],
      className
    );

    const checkbox = (
      <input
        type="checkbox"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      />
    );

    if (!label) {
      return checkbox;
    }
    return (
      <Label reverse={reverse} className={labelClassName}>
        {checkbox}
        <Label.Text>{label}</Label.Text>
      </Label>
    );
  }
);

Checkbox.displayName = "Checkbox";
