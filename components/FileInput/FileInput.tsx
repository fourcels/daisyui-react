import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";

import { ReactNode, forwardRef } from "react";

export type FileInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "color"
> &
  ComponentBaseProps & {
    size?: ComponentSize;
    color?: Exclude<ComponentColor, "neutral" | "ghost">;
  };

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ size, color, dataTheme, className, ...props }, ref) => {
    const sizes = {
      lg: "file-input-lg",
      md: "file-input-md",
      sm: "file-input-sm",
      xs: "file-input-xs",
    };
    const colors = {
      primary: "file-input-primary",
      secondary: "file-input-secondary",
      accent: "file-input-accent",
      info: "file-input-info",
      success: "file-input-success",
      warning: "file-input-warning",
      error: "file-input-error",
    };

    const classes = twMerge(
      "file-input",
      size && sizes[size],
      color && colors[color],
      className
    );

    return (
      <input
        type="file"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      />
    );
  }
);

FileInput.displayName = "FileInput";
