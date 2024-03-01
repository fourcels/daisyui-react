import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentColor, ComponentSize } from "../types";

import React, { forwardRef } from "react";
import { RatingItem, RatingItemProps } from "./RatingItem";

export type RatingProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "size" | "color"
> &
  ComponentBaseProps & {
    size?: ComponentSize;
    count?: number;
    defaultValue?: number;
    mask?: RatingItemProps["mask"];
    half?: boolean;
    name?: string;
    itemClassName?: string;
  };

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      name = "rating",
      half,
      mask,
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
    const [value, setValue] = React.useState(defaultValue);

    const classes = twMerge("rating", size && sizes[size], className);
    return (
      <div ref={ref} className={classes} {...props}>
        {[...Array(count)].map((_, i) => (
          <RatingItem
            name={name}
            className={twMerge(i + 1 <= value && "active", itemClassName)}
            mask={mask}
            key={i}
            onClick={() => setValue(i + 1)}
          />
        ))}
      </div>
    );
  }
);

Rating.displayName = "Rating";
