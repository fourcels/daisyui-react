import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentSize } from "../types";

import React, { forwardRef } from "react";
import { RatingItem, RatingItemProps } from "./RatingItem";

export type RatingProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "size" | "color"
> &
  ComponentBaseProps & {
    defaultValue?: number;
    value?: number;
    size?: ComponentSize;
    count?: number;
    mask?: RatingItemProps["mask"];
    color?: RatingItemProps["color"];
    half?: boolean;
    itemClassName?: string;
    clearable?: boolean;
    readonly?: boolean;
  };

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      readonly,
      color,
      clearable = true,
      half,
      mask,
      value,
      defaultValue = 0,
      count = 5,
      size,
      dataTheme,
      className,
      itemClassName,
      ...props
    },
    ref
  ) => {
    const sizes = {
      lg: "rating-lg",
      md: "rating-md",
      sm: "rating-sm",
      xs: "rating-xs",
    };

    const [valueInner, setValueInner] = React.useState(value ?? defaultValue);

    React.useEffect(() => {
      typeof value !== "undefined" && setValueInner(value);
    }, [value]);

    const activeValue = React.useMemo(() => {
      return Math.ceil(valueInner);
    }, [valueInner]);

    const classes = twMerge(
      "rating",
      size && sizes[size],
      half && "rating-half",
      readonly && "pointer-events-none",
      className
    );
    return (
      <div data-theme={dataTheme} ref={ref} className={classes} {...props}>
        {[...Array(count)].map((_, i) =>
          half ? (
            <div key={i} className="flex">
              <RatingItem
                half="half-1"
                className={itemClassName}
                active={i * 2 + 1 <= activeValue}
                color={color}
                mask={mask}
                onClick={() => {
                  if (clearable && activeValue === i * 2 + 1) {
                    return setValueInner(0);
                  }
                  setValueInner(i * 2 + 1);
                }}
              />
              <RatingItem
                half="half-2"
                className={itemClassName}
                active={i * 2 + 2 <= activeValue}
                color={color}
                mask={mask}
                onClick={() => {
                  if (clearable && activeValue === i * 2 + 2) {
                    return setValueInner(0);
                  }
                  setValueInner(i * 2 + 2);
                }}
              />
            </div>
          ) : (
            <RatingItem
              className={itemClassName}
              active={i + 1 <= activeValue}
              color={color}
              mask={mask}
              key={i}
              onClick={() => {
                if (clearable && activeValue === i + 1) {
                  return setValueInner(0);
                }
                setValueInner(i + 1);
              }}
            />
          )
        )}
      </div>
    );
  }
);

Rating.displayName = "Rating";
