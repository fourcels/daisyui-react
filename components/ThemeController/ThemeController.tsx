import { twMerge } from "tailwind-merge";

import { forwardRef } from "react";
import { Toggle, ToggleProps } from "../Toggle";
import {
  ThemeControllerButton,
  ThemeControllerButtonProps,
} from "./ThemeControllerButton";
import {
  ThemeControllerCheckbox,
  ThemeControllerCheckboxProps,
} from "./ThemeControllerCheckbox";
import {
  ThemeControllerSwap,
  ThemeControllerSwapProps,
} from "./ThemeControllerSwap";
import {
  ThemeControllerRadio,
  ThemeControllerRadioProps,
} from "./ThemeControllerRadio";
import {
  ThemeControllerRadioGroup,
  ThemeControllerRadioGroupProps,
} from "./ThemeControllerRadioGroup";
import {
  ThemeControllerButtonGroup,
  ThemeControllerButtonGroupProps,
} from "./ThemeControllerButtonGroup";
import {
  ThemeControllerDropdown,
  ThemeControllerDropdownProps,
} from "./ThemeControllerDropdown";

export type {
  ThemeControllerButtonProps,
  ThemeControllerCheckboxProps,
  ThemeControllerSwapProps,
  ThemeControllerRadioProps,
  ThemeControllerRadioGroupProps,
  ThemeControllerButtonGroupProps,
  ThemeControllerDropdownProps,
};

export type ThemeControllerProps = ToggleProps;

export const ThemeControllerInner = forwardRef<
  HTMLInputElement,
  ThemeControllerProps
>(({ className, ...props }, ref) => {
  const classes = twMerge("theme-controller", className);
  return <Toggle ref={ref} {...props} className={classes} />;
});

ThemeControllerInner.displayName = "ThemeController";

export const ThemeController = Object.assign(ThemeControllerInner, {
  Button: ThemeControllerButton,
  Checkbox: ThemeControllerCheckbox,
  Swap: ThemeControllerSwap,
  Radio: ThemeControllerRadio,
  RadioGroup: ThemeControllerRadioGroup,
  ButtonGroup: ThemeControllerButtonGroup,
  Dropdown: ThemeControllerDropdown,
});
