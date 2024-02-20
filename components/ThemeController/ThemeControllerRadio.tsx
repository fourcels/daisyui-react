import { twMerge } from "tailwind-merge";

import { forwardRef } from "react";
import { Radio, RadioProps } from "../Radio";

export type ThemeControllerRadioProps = RadioProps;

export const ThemeControllerRadio = forwardRef<
  HTMLInputElement,
  ThemeControllerRadioProps
>(({ className, ...props }, ref) => {
  const classes = twMerge("theme-controller", className);
  return <Radio ref={ref} {...props} className={classes} />;
});

ThemeControllerRadio.displayName = "ThemeControllerRadio";
