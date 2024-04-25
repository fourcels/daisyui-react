import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";

import React, { forwardRef, useMemo, useState } from "react";

export type RangeProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  | "size"
  | "color"
  | "min"
  | "max"
  | "step"
  | "value"
  | "defaultValue"
  | "onChange"
> &
  ComponentBaseProps & {
    size?: ComponentSize;
    color?: Exclude<ComponentColor, "neutral" | "ghost">;
    measure?: boolean;
    wrapperClassName?: string;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    defaultValue?: number;
    onChange?: (value: number, e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: boolean | ((value: number) => React.ReactNode);
  };

export const Range = forwardRef<HTMLInputElement, RangeProps>(
  (
    {
      wrapperClassName,
      measure,
      size,
      color,
      dataTheme,
      className,
      value,
      defaultValue = 0,
      max = 100,
      min = 0,
      step = 1,
      onChange,
      label,
      ...props
    },
    ref
  ) => {
    const [valueInner, setValueInner] = useState(value ?? defaultValue);

    React.useEffect(() => {
      if (value !== undefined) {
        setValueInner(value);
      }
    }, [value]);

    const sizes = {
      lg: "range-lg",
      md: "range-md",
      sm: "range-sm",
      xs: "range-xs",
    };
    const colors = {
      primary: "range-primary",
      secondary: "range-secondary",
      accent: "range-accent",
      info: "range-info",
      success: "range-success",
      warning: "range-warning",
      error: "range-error",
    };

    const classes = twMerge(
      "range",
      size && sizes[size],
      color && colors[color],
      className
    );

    const numTicks = useMemo(() => {
      return step > 0 ? Math.max(Math.ceil((max - min) / step), 1) + 1 : 0;
    }, [step, min, max]);

    const labelInner = useMemo(() => {
      if (!label) {
        return null;
      }
      if (typeof label === "boolean") {
        return (
          <div className="range-label w-8 text-center flex-shrink-0">
            {valueInner.toFixed(0)}
          </div>
        );
      } else {
        return label(valueInner);
      }
    }, [label, valueInner]);

    return (
      <div className={twMerge("range-wrapper w-full", wrapperClassName)}>
        <div className="flex items-center gap-2">
          <div className="flex flex-col flex-1 gap-1">
            <input
              type="range"
              value={valueInner}
              max={max}
              min={min}
              step={step > 0 ? step : "any"}
              ref={ref}
              data-theme={dataTheme}
              className={classes}
              onChange={(e) => {
                const value = +e.target.value;
                setValueInner(value);
                onChange?.(value, e);
              }}
              {...props}
            />
            {measure && step > 0 && (
              <div className="range-measure w-full flex justify-between text-xs px-2">
                {[...Array(numTicks)].map((_, i) => (
                  <span key={i}>|</span>
                ))}
              </div>
            )}
          </div>
          {labelInner}
        </div>
      </div>
    );
  }
);

Range.displayName = "Range";
