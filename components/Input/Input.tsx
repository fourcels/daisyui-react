import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";

import { ReactNode, forwardRef } from "react";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "color"
> &
  ComponentBaseProps & {
    size?: ComponentSize;
    color?: Exclude<ComponentColor, "neutral" | "ghost">;
    bordered?: boolean;
    start?: React.ReactNode;
    end?: React.ReactNode;
    inputClassName?: string;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled,
      inputClassName,
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

    return (
      <label className={classes}>
        {start}
        <input
          {...props}
          ref={ref}
          data-theme={dataTheme}
          className={twMerge(
            "grow",
            disabled && "input-disabled",
            inputClassName
          )}
          disabled={disabled}
        />
        {end}
      </label>
    );
  }
);

Input.displayName = "Input";
