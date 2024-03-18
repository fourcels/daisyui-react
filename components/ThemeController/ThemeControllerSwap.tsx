import { twMerge } from "tailwind-merge";

import { forwardRef } from "react";
import { ComponentBaseProps } from "../types";

export type ThemeControllerSwapProps = ComponentBaseProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    effect?: "flip" | "rotate";
  };

export const ThemeControllerSwap = forwardRef<
  HTMLLabelElement,
  ThemeControllerSwapProps
>(({ children, effect, className, dataTheme, ...props }, ref) => {
  const effects = {
    flip: "swap-flip",
    rotate: "swap-rotate",
  };

  const classes = twMerge("swap", effect && effects[effect], className);
  return (
    <label ref={ref} className={classes} data-theme={dataTheme}>
      <input type="checkbox" className="theme-controller" {...props} />
      {children}
    </label>
  );
});

ThemeControllerSwap.displayName = "ThemeControllerSwap";
