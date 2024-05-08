import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";

import React, { forwardRef } from "react";
import "./Input.css";
import { Button } from "../Button";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "color" | "onChange"
> &
  ComponentBaseProps & {
    size?: ComponentSize;
    color?: Exclude<ComponentColor, "neutral">;
    bordered?: boolean;
    start?: React.ReactNode;
    end?: React.ReactNode;
    inputClassName?: string;
    contentClassName?: string;
    onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
    clearable?: boolean;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      clearable = true,
      onChange,
      value,
      defaultValue = "",
      disabled,
      inputClassName,
      contentClassName,
      className,
      start,
      end,
      size,
      color,
      bordered = true,
      dataTheme,
      ...props
    },
    ref
  ) => {
    const sizes = {
      lg: "input-lg",
      md: "input-md",
      sm: "input-sm",
      xs: "input-xs",
    };
    const colors = {
      primary: "input-primary",
      secondary: "input-secondary",
      accent: "input-accent",
      info: "input-info",
      success: "input-success",
      warning: "input-warning",
      error: "input-error",
      ghost: "input-ghost",
    };

    const inputRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => inputRef.current!);

    const [valueInner, setValueInner] = React.useState(value ?? defaultValue);

    React.useEffect(() => {
      if (value !== undefined) {
        setValueInner(value);
      }
    }, [value]);

    const showClearable = React.useMemo(() => {
      if (disabled) {
        return false;
      }

      if (clearable && valueInner) {
        return true;
      }
      return false;
    }, [clearable, valueInner, disabled]);

    return (
      <label
        className={twMerge(
          "input input-label",
          size && sizes[size],
          color && colors[color],
          bordered && "input-bordered",
          disabled && "input-disabled",
          className
        )}
        data-theme={dataTheme}
      >
        {start}
        <div className={twMerge("input-content", contentClassName)}>
          <input
            value={valueInner}
            onChange={(e) => {
              const value = e.target.value;
              setValueInner(value);
              onChange?.(value, e);
            }}
            ref={inputRef}
            className={twMerge(
              "w-full",
              disabled && "input-disabled",
              inputClassName
            )}
            disabled={disabled}
            {...props}
          />
          {showClearable && (
            <Button
              onClick={() => {
                const input = inputRef.current;
                if (!input) {
                  return;
                }

                const lastValue = input.value;
                input.value = "";
                // @ts-expect-error react _valueTracker
                input._valueTracker.setValue(lastValue);
                input.dispatchEvent(new Event("input", { bubbles: true }));
              }}
              shape="circle"
              size="xs"
              color="neutral"
              className="input-clearable"
            >
              ✕
            </Button>
          )}
        </div>
        {end}
      </label>
    );
  }
);

Input.displayName = "Input";
