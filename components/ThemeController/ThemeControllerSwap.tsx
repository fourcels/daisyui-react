import { twMerge } from "tailwind-merge";

import { forwardRef } from "react";
import { Swap, SwapProps } from "../Swap";

export type ThemeControllerSwapProps = SwapProps;

export const ThemeControllerSwap = forwardRef<
  HTMLLabelElement,
  ThemeControllerSwapProps
>(({ inputClassName, ...props }, ref) => {
  return (
    <Swap
      ref={ref}
      inputClassName={twMerge("theme-controller", inputClassName)}
      {...props}
    />
  );
});

ThemeControllerSwap.displayName = "ThemeControllerSwap";
