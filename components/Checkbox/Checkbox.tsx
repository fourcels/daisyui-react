import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";

import React, { ReactNode, forwardRef } from "react";
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
    indeterminate?: boolean;
  };

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      indeterminate,
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
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!);

    React.useEffect(() => {
      const input = inputRef.current;
      if (!input) {
        return;
      }
      input.indeterminate = !!indeterminate;
    }, [indeterminate]);

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

    return (
      <Label
        reverse={reverse}
        className={twMerge(
          indeterminate && "pointer-events-none",
          labelClassName
        )}
      >
        <input
          type="checkbox"
          {...props}
          ref={inputRef}
          data-theme={dataTheme}
          className={classes}
        />
        {label && <Label.Text>{label}</Label.Text>}
      </Label>
    );
  }
);

Checkbox.displayName = "Checkbox";
