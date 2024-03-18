import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";

import React, { ReactNode, forwardRef } from "react";
import { Label } from "../Label";

export type ToggleProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "color" | "onChange"
> &
  ComponentBaseProps & {
    size?: ComponentSize;
    color?: Exclude<ComponentColor, "neutral" | "ghost">;
    label?: ReactNode;
    labelAlt?: ReactNode;
    wrapperClassName?: string;
    reverse?: boolean;
    onChange?: (
      checked: boolean,
      e: React.ChangeEvent<HTMLInputElement>
    ) => void;
  };

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      defaultChecked = false,
      checked,
      onChange,
      reverse,
      children,
      label,
      labelAlt,
      size,
      color,
      dataTheme,
      className,
      wrapperClassName,
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
    const [checkedInner, setCheckedInner] = React.useState(
      checked ?? defaultChecked
    );
    React.useEffect(() => {
      typeof checked !== "undefined" && setCheckedInner(checked);
    }, [checked]);

    return (
      <Label reverse={reverse} className={wrapperClassName}>
        {labelAlt && <Label.Text>{labelAlt}</Label.Text>}
        <input
          checked={checkedInner}
          onChange={(e) => {
            const checked = e.target.checked;
            setCheckedInner(checked);
            onChange?.(checked, e);
          }}
          type="checkbox"
          {...props}
          ref={ref}
          data-theme={dataTheme}
          className={classes}
        />
        {label && <Label.Text>{label}</Label.Text>}
        {children}
      </Label>
    );
  }
);

Toggle.displayName = "Toggle";
