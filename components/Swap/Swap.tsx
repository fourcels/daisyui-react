import React, { forwardRef } from "react";
import { ComponentBaseProps } from "../types";
import { twMerge } from "tailwind-merge";
import { SwapOn, SwapOnProps } from "./SwapOn";
import { SwapOff, SwapOffProps } from "./SwapOff";

export type { SwapOnProps, SwapOffProps };

export type SwapProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> &
  ComponentBaseProps & {
    effect?: "flip" | "rotate";
    active?: boolean;
    inputClassName?: string;
    onChange?: (
      checked: boolean,
      e: React.ChangeEvent<HTMLInputElement>
    ) => void;
  };

const SwapInner = forwardRef<HTMLLabelElement, SwapProps>(
  (
    { onChange, inputClassName, active, effect, children, className, ...props },
    ref
  ) => {
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
      <label ref={ref} className={classes}>
        <input
          type="checkbox"
          onChange={(e) => {
            onChange?.(e.target.checked, e);
          }}
          className={inputClassName}
          {...props}
        />
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
