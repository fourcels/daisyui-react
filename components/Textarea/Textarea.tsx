import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";

import React, { forwardRef } from "react";

export type TextareaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "size" | "color"
> &
  ComponentBaseProps & {
    bordered?: boolean;
    size?: ComponentSize;
    color?: Exclude<ComponentColor, "neutral">;
  };

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ bordered = true, size, color, dataTheme, className, ...props }, ref) => {
    const sizes = {
      lg: "textarea-lg",
      md: "textarea-md",
      sm: "textarea-sm",
      xs: "textarea-xs",
    };
    const colors = {
      primary: "textarea-primary",
      secondary: "textarea-secondary",
      accent: "textarea-accent",
      info: "textarea-info",
      success: "textarea-success",
      warning: "textarea-warning",
      error: "textarea-error",
      ghost: "textarea-ghost",
    };

    const classes = twMerge(
      "textarea",
      size && sizes[size],
      color && colors[color],
      bordered && "textarea-bordered",
      className
    );

    return (
      <textarea
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      />
    );
  }
);

Textarea.displayName = "Textarea";
