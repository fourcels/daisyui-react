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
    indeterminate?: boolean;
  };

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      indeterminate,
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
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!);

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
      const input = inputRef.current;
      if (!input) {
        return;
      }
      typeof checked != "undefined" && setCheckedInner(checked);
      input.indeterminate = !!indeterminate;
    }, [checked, indeterminate]);

    return (
      <Label reverse={reverse} className={wrapperClassName}>
        {labelAlt && <Label.Text>{labelAlt}</Label.Text>}
        <input
          checked={checkedInner}
          onChange={(e) => {
            if (indeterminate) {
              e.preventDefault();
              return;
            }
            const checked = e.target.checked;
            setCheckedInner(checked);
            onChange?.(checked, e);
          }}
          type="checkbox"
          {...props}
          ref={inputRef}
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
