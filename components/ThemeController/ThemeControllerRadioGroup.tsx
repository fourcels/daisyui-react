import { twMerge } from "tailwind-merge";

import { forwardRef } from "react";
import { Radio } from "../Radio";
import { ComponentBaseProps } from "../types";
import {
  ThemeControllerRadio,
  ThemeControllerRadioProps,
} from "./ThemeControllerRadio";
import { ThemeControllerButtonProps } from ".";

export type ThemeControllerGroupItem =
  | string
  | {
      value: string;
      label: string;
    };

export type ThemeControllerRadioGroupProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> &
  ComponentBaseProps & {
    direction?: "vertical" | "horizontal";
    radioProps?: ThemeControllerRadioProps;
    items?: ThemeControllerGroupItem[];
    name: string;
    value?: ThemeControllerRadioProps["value"];
    onChange?: (value: ThemeControllerRadioProps["value"]) => void;
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
      direction,
      dataTheme,
      className,
      radioProps,
      ...props
    },
    ref
  ) => {
    const classes = twMerge(
      "flex flex-wrap gap-4",
      direction === "vertical" && "flex-col gap-0",
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
