import React, { forwardRef } from "react";
import { ComponentBaseProps } from "../types";
import { twMerge } from "tailwind-merge";
import { SwapOn, SwapOnProps } from "./SwapOn";
import { SwapOff, SwapOffProps } from "./SwapOff";

export type { SwapOnProps, SwapOffProps };

export type SwapProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  ComponentBaseProps & {
    effect?: "flip" | "rotate";
    active?: boolean;
    checkbox?: boolean;
  };

const SwapInner = forwardRef<HTMLLabelElement, SwapProps>(
  ({ checkbox = true, active, effect, children, className, ...props }, ref) => {
    const effects = {
      flip: "swap-flip",
      rotate: "swap-rotate",
    };

    const classes = twMerge(
      "swap",
      effect && effects[effect],
      active && "swap-active",
      className
    );

    return (
      <label ref={ref} className={classes} {...props}>
        {checkbox && <input type="checkbox" />}
        {children}
      </label>
    );
  }
);

SwapInner.displayName = "Swap";

export const Swap = Object.assign(SwapInner, {
  On: SwapOn,
  Off: SwapOff,
});
