import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";

import React, { ReactNode, forwardRef } from "react";
import { Label } from "../Label";

export type ToggleProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "color" | "value" | "defaultValue" | "onChange"
> &
  ComponentBaseProps & {
    size?: ComponentSize;
    color?: Exclude<ComponentColor, "neutral" | "ghost">;
    label?: ReactNode;
    labelClassName?: string;
    reverse?: boolean;
    value?: boolean;
    defaultValue?: boolean;
    onChange?: (val: boolean) => void;
  };

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      value,
      defaultValue = false,
      onChange,
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
    const [valueInner, setValueInner] = React.useState(value ?? defaultValue);
    React.useEffect(() => {
      typeof value !== "undefined" && setValueInner(value);
    }, [value]);

    return (
      <Label reverse={reverse} className={labelClassName}>
        <input
          checked={valueInner}
          onChange={(e) => {
            const value = e.target.checked;
            setValueInner(value);
            onChange?.(value);
          }}
          type="checkbox"
          {...props}
          ref={ref}
          data-theme={dataTheme}
          className={classes}
        />
        <Label.Text>{label || children}</Label.Text>
      </Label>
    );
  }
);

Toggle.displayName = "Toggle";
