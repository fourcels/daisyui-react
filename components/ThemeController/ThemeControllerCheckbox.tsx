import { twMerge } from "tailwind-merge";

import { forwardRef } from "react";
import { Checkbox, CheckboxProps } from "../Checkbox";

export type ThemeControllerCheckboxProps = CheckboxProps;

export const ThemeControllerCheckbox = forwardRef<
  HTMLInputElement,
  ThemeControllerCheckboxProps
>(({ className, ...props }, ref) => {
  const classes = twMerge("theme-controller", className);
  return <Checkbox {...props} ref={ref} className={classes} />;
});

ThemeControllerCheckbox.displayName = "ThemeControllerCheckbox";
