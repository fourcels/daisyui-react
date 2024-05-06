import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps } from "../types";

export type ArtboardProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    size?:
      | "phone-1"
      | "phone-2"
      | "phone-3"
      | "phone-4"
      | "phone-5"
      | "phone-6";
    horizontal?: boolean;
  };

export const Artboard = forwardRef<HTMLDivElement, ArtboardProps>(
  ({ size, horizontal, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      "artboard artboard-demo",
      size ? size : "phone-1",
      horizontal && "artboard-horizontal",
      className
    );

    return (
      <div
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      ></div>
    );
  }
);

Artboard.displayName = "Artboard";
