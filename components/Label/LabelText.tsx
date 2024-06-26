import { forwardRef } from "react";
import { ComponentBaseProps } from "../types";
import { twMerge } from "tailwind-merge";

export type LabelTextProps = React.HTMLAttributes<HTMLSpanElement> &
  ComponentBaseProps & {
    alt?: boolean;
  };

export const LabelText = forwardRef<HTMLSpanElement, LabelTextProps>(
  ({ alt, className, dataTheme, ...props }, ref) => {
    const classes = twMerge(alt ? "label-text-alt" : "label-text", className);
    return (
      <span {...props} className={classes} data-theme={dataTheme} ref={ref} />
    );
  }
);

LabelText.displayName = "LabelText";
