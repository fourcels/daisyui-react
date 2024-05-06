import { forwardRef } from "react";
import { ComponentBaseProps } from "../types";
import { twMerge } from "tailwind-merge";
import { LabelText, LabelTextProps } from "./LabelText";

export type { LabelTextProps };

export type LabelProps = React.HTMLAttributes<HTMLLabelElement> &
  ComponentBaseProps & {
    reverse?: boolean;
  };

const LabelInner = forwardRef<HTMLLabelElement, LabelProps>(
  ({ reverse, className, dataTheme, ...props }, ref) => {
    const classes = twMerge(
      "label cursor-pointer gap-4",
      reverse && "flex-row-reverse",
      className
    );
    return (
      <label {...props} className={classes} data-theme={dataTheme} ref={ref} />
    );
  }
);

LabelInner.displayName = "Label";

export const Label = Object.assign(LabelInner, {
  Text: LabelText,
});
