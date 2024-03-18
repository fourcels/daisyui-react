import { twMerge } from "tailwind-merge";

import { forwardRef } from "react";
import { ComponentBaseProps } from "../types";
import { ThemeControllerItem } from "./types";
import {
  ThemeControllerButton,
  ThemeControllerButtonProps,
} from "./ThemeControllerButton";

export type ThemeControllerButtonGroupProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> &
  ComponentBaseProps & {
    vertical?: boolean;
    buttonProps?: ThemeControllerButtonProps;
    items?: ThemeControllerItem[];
    name: string;
    value?: string;
    onChange?: (value: string) => void;
  };

export const ThemeControllerButtonGroup = forwardRef<
  HTMLDivElement,
  ThemeControllerButtonGroupProps
>(
  (
    {
      value,
      onChange,
      items,
      name,
      vertical,
      dataTheme,
      className,
      buttonProps,
      ...props
    },
    ref
  ) => {
    const classes = twMerge("join", vertical && "join-vertical", className);
    return (
      <div className={classes} ref={ref} data-theme={dataTheme} {...props}>
        {items?.map((item) => {
          if (typeof item === "string") {
            item = {
              label: item,
              value: item,
            };
          }
          return (
            <ThemeControllerButton
              checked={value === item.value}
              onChange={(e) => onChange?.(e.target.value)}
              name={name}
              key={item.value}
              aria-label={item.label}
              value={item.value}
              {...buttonProps}
            />
          );
        })}
      </div>
    );
  }
);

ThemeControllerButtonGroup.displayName = "ThemeControllerButtonGroup";
