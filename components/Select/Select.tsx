import { twMerge } from "tailwind-merge";

import {
  ComponentBaseProps,
  ComponentColor,
  ComponentSize,
  ListOrItem,
} from "../types";

import { SelectOption, SelectOptionProps } from "./SelectOption";
import React, { ReactElement, forwardRef } from "react";
import { Button } from "../Button";
import "./Select.css";

export type SelectItem =
  | string
  | number
  | {
      label: string;
      value: string | number;
    };

export type SelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "size" | "color" | "onChange"
> &
  ComponentBaseProps & {
    children?: ListOrItem<ReactElement<SelectOptionProps>>;
    size?: ComponentSize;
    color?: Exclude<ComponentColor, "neutral">;
    bordered?: boolean;
    placeholder?: string | null;
    items?: SelectItem[];
    onChange?: (value: string, e: React.ChangeEvent<HTMLSelectElement>) => void;
    clearable?: boolean;
    wrapperClassName?: string;
  };

const SelectInner = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      disabled,
      clearable = true,
      onChange,
      value,
      defaultValue = "",
      placeholder = "Select...",
      items = [],
      children,
      size,
      color,
      bordered = true,
      dataTheme,
      className,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    const sizes = {
      lg: "select-lg",
      md: "select-md",
      sm: "select-sm",
      xs: "select-xs",
    };
    const colors = {
      primary: "select-primary",
      secondary: "select-secondary",
      accent: "select-accent",
      info: "select-info",
      success: "select-success",
      warning: "select-warning",
      error: "select-error",
      ghost: "select-ghost",
    };

    const selectRef = React.useRef<HTMLSelectElement>(null);
    React.useImperativeHandle(ref, () => selectRef.current!);

    const [selectValue, setSelectValue] = React.useState(value ?? defaultValue);

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectValue(value);
      }
    }, [value]);

    const classes = twMerge(
      "select",
      size && sizes[size],
      color && colors[color],
      bordered && "select-bordered",
      !selectValue && "text-base-content/60",
      className
    );

    const options = React.useMemo(() => {
      if (children) {
        return children;
      }
      return items.map((item) => {
        if (typeof item === "string" || typeof item === "number") {
          return <SelectOption key={item}>{item}</SelectOption>;
        }
        const { label, value = label } = item;
        return (
          <SelectOption key={value} value={value}>
            {label}
          </SelectOption>
        );
      });
    }, [children, items]);

    const showClearable = React.useMemo(() => {
      if (disabled) {
        return false;
      }

      if (clearable && selectValue && placeholder) {
        return true;
      }
      return false;
    }, [clearable, selectValue, disabled, placeholder]);

    return (
      <div className={twMerge("select-wrapper", wrapperClassName)}>
        <select
          value={selectValue}
          disabled={disabled}
          onChange={(e) => {
            const value = e.target.value;
            setSelectValue(value);
            onChange?.(value, e);
          }}
          {...props}
          ref={selectRef}
          data-theme={dataTheme}
          className={classes}
        >
          {placeholder && (
            <SelectOption value="" disabled>
              {placeholder}
            </SelectOption>
          )}
          {options}
        </select>
        {showClearable && (
          <Button
            onClick={() => {
              const select = selectRef.current;
              if (!select) {
                return;
              }
              select.value = "";
              select.dispatchEvent(new Event("change", { bubbles: true }));
            }}
            shape="circle"
            size="xs"
            color="neutral"
            className="select-clearable"
          >
            ✕
          </Button>
        )}
      </div>
    );
  }
);

SelectInner.displayName = "Select";
export const Select = Object.assign(SelectInner, {
  Option: SelectOption,
});
