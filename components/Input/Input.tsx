import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";

import React, { ReactNode, forwardRef } from "react";
import "./Input.css";
import { Button } from "../Button";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "color" | "onChange"
> &
  ComponentBaseProps & {
    size?: ComponentSize;
    color?: Exclude<ComponentColor, "neutral">;
    bordered?: boolean;
    start?: React.ReactNode;
    end?: React.ReactNode;
    inputClassName?: string;
    wrapperClassName?: string;
    onChange?: (value: string) => void;
    clearable?: boolean;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      clearable = true,
      onChange,
      value,
      defaultValue = "",
      disabled,
      inputClassName,
      wrapperClassName,
      start,
      end,
      size,
      color,
      bordered = true,
      dataTheme,
      className,
      ...props
    },
    ref
  ) => {
    const sizes = {
      lg: "input-lg",
      md: "input-md",
      sm: "input-sm",
      xs: "input-xs",
    };
    const colors = {
      primary: "input-primary",
      secondary: "input-secondary",
      accent: "input-accent",
      info: "input-info",
      success: "input-success",
      warning: "input-warning",
      error: "input-error",
      ghost: "input-ghost",
    };

    const classes = twMerge(
      "input flex items-center gap-2",
      size && sizes[size],
      color && colors[color],
      bordered && "input-bordered",
      disabled && "input-disabled",
      className
    );

    const [valueInner, setValueInner] = React.useState(value ?? defaultValue);

    const showClearable = React.useMemo(() => {
      if (disabled) {
        return false;
      }

      if (clearable && valueInner) {
        return true;
      }
      return false;
    }, [clearable, valueInner, disabled]);

    return (
      <label className={classes} data-theme={dataTheme}>
        {start}
        <div className={twMerge("input-wrapper", wrapperClassName)}>
          <input
            value={valueInner}
            onChange={(e) => {
              const value = e.target.value;
              setValueInner(value);
              onChange?.(value);
            }}
            ref={ref}
            className={twMerge(
              "w-full",
              disabled && "input-disabled",
              inputClassName
            )}
            disabled={disabled}
            {...props}
          />
          {showClearable && (
            <Button
              onClick={() => {
                setValueInner("");
                onChange?.("");
              }}
              shape="circle"
              size="xs"
              color="neutral"
              className="input-clearable"
            >
              ✕
            </Button>
          )}
        </div>
        {end}
      </label>
    );
  }
);

Input.displayName = "Input";
