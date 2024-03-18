import { forwardRef } from "react";
import { ThemeControllerItem } from "./types";
import {
  ThemeControllerButton,
  ThemeControllerButtonProps,
} from "./ThemeControllerButton";
import { Dropdown, DropdownProps } from "../Dropdown";
import { Menu } from "../Menu";

export type ThemeControllerDropdownProps = DropdownProps & {
  items?: ThemeControllerItem[];
  buttonProps?: ThemeControllerButtonProps;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
};

export const ThemeControllerDropdown = forwardRef<
  HTMLDivElement,
  ThemeControllerDropdownProps
>(({ value, onChange, items, name, buttonProps, ...props }, ref) => {
  return (
    <Dropdown ref={ref} {...props}>
      <Menu>
        {items?.map((item) => {
          if (typeof item === "string") {
            item = {
              label: item,
              value: item,
            };
          }
          return (
            <Menu.Item key={item.value}>
              <ThemeControllerButton
                checked={value === item.value}
                onChange={(e) => onChange?.(e.target.value)}
                block
                color="ghost"
                name={name}
                aria-label={item.label}
                value={item.value}
                {...buttonProps}
              />
            </Menu.Item>
          );
        })}
      </Menu>
    </Dropdown>
  );
});

ThemeControllerDropdown.displayName = "ThemeControllerDropdown";
