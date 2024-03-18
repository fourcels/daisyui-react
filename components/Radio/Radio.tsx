import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";

import { ReactNode, forwardRef } from "react";
import { Label } from "../Label";

export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "color"
> &
  ComponentBaseProps & {
    size?: ComponentSize;
    color?: Exclude<ComponentColor, "neutral" | "ghost">;
    label?: ReactNode;
    wrapperClassName?: string;
    reverse?: boolean;
  };

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      reverse,
      label,
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
      lg: "radio-lg",
      md: "radio-md",
      sm: "radio-sm",
      xs: "radio-xs",
    };
    const colors = {
      primary: "radio-primary",
      secondary: "radio-secondary",
      accent: "radio-accent",
      info: "radio-info",
      success: "radio-success",
      warning: "radio-warning",
      error: "radio-error",
    };

    const classes = twMerge(
      "radio",
      size && sizes[size],
      color && colors[color],
      className
    );

    const radio = (
      <input
        type="radio"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      />
    );

    if (!label) {
      return radio;
    }

    return (
      <Label reverse={reverse} className={wrapperClassName}>
        {radio}
        <Label.Text>{label}</Label.Text>
      </Label>
    );
  }
);

Radio.displayName = "Radio";
