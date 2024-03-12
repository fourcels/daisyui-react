import React, { ReactElement, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { ComponentBaseProps, ComponentSize, ListOrItem } from "../types";
import { PaginationItem, PaginationItemProps } from "./PaginationItem";
import { PaginationRadio, PaginationRadioProps } from "./PaginationRadio";

export type { PaginationItemProps, PaginationRadioProps };

export type PaginationProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> &
  ComponentBaseProps & {
    children?: ListOrItem<ReactElement>;
    size?: ComponentSize;
    name?: string;
  };

const PaginationInner = forwardRef<HTMLDivElement, PaginationProps>(
  (
    { name, size, children, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge("join", className);

    return (
      <div {...props} ref={ref} data-theme={dataTheme} className={classes}>
        {children &&
          React.Children.map(children, (child) =>
            React.cloneElement(child, {
              size,
              name,
            })
          )}
      </div>
    );
  }
);

PaginationInner.displayName = "Pagination";

export const Pagination = Object.assign(PaginationInner, {
  Item: PaginationItem,
  Radio: PaginationRadio,
});
