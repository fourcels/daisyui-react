import { forwardRef } from "react";
import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";
import { twMerge } from "tailwind-merge";

export type LoadingProps = React.HTMLAttributes<HTMLSpanElement> &
  ComponentBaseProps & {
    size?: ComponentSize;
    color?: Exclude<ComponentColor, "ghost">;
    variant?: "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
  };

export const Loading = forwardRef<HTMLSpanElement, LoadingProps>(
  (
    { size, variant = "spinner", color, dataTheme, className, style, ...props },
    ref
  ) => {
    const sizes = {
      lg: "loading-lg",
      md: "loading-md",
      sm: "loading-sm",
      xs: "loading-xs",
    };

    const variants = {
      spinner: "loading-spinner",
      dots: "loading-dots",
      ring: "loading-ring",
      ball: "loading-ball",
      bars: "loading-bars",
      infinity: "loading-infinity",
    };
    const colors = {
      neutral: "text-neutral",
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      info: "text-info",
      success: "text-success",
      warning: "text-warning",
      error: "text-error",
    };

    const classes = twMerge(
      "loading",
      size && sizes[size],
      variant && variants[variant],
      color && colors[color],
      className
    );
    return (
      <span
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
        style={style}
      />
    );
  }
);

Loading.displayName = "Loading";
