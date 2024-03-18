import { twMerge } from "tailwind-merge";

import { forwardRef } from "react";
import { ComponentBaseProps } from "../types";
import {
  ThemeControllerRadio,
  ThemeControllerRadioProps,
} from "./ThemeControllerRadio";
import { ThemeControllerItem } from "./types";

export type ThemeControllerRadioGroupProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> &
  ComponentBaseProps & {
    vertical?: boolean;
    radioProps?: ThemeControllerRadioProps;
    items?: ThemeControllerItem[];
    name: string;
    value?: string;
    onChange?: (value: string) => void;
  };

export const ThemeControllerRadioGroup = forwardRef<
  HTMLDivElement,
  ThemeControllerRadioGroupProps
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
      radioProps,
      ...props
    },
    ref
  ) => {
    const classes = twMerge(
      "flex flex-wrap gap-4",
      vertical && "flex-col gap-0",
      className
    );
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
            <ThemeControllerRadio
              checked={value === item.value}
              onChange={(e) => onChange?.(e.target.value)}
              name={name}
              key={item.value}
              label={item.label}
              value={item.value}
              {...radioProps}
            />
          );
        })}
      </div>
    );
  }
);

ThemeControllerRadioGroup.displayName = "ThemeControllerRadioGroup";
