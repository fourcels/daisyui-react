import React, { ReactElement, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import {
  ComponentBaseProps,
  ComponentColor,
  ComponentSize,
  ListOrItem,
} from "../types";
import {
  BottomNavigationItem,
  BottomNavigationItemProps,
} from "./BottomNavigationItem";

export type { BottomNavigationItemProps };

export type BottomNavigationProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "color" | "size" | "children"
> &
  ComponentBaseProps & {
    size?: ComponentSize;
    color?: BottomNavigationItemProps["color"];
    children?: ListOrItem<ReactElement>;
  };

const BottomNavigationInner = forwardRef<HTMLDivElement, BottomNavigationProps>(
  (
    { size, children, color, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const sizes = {
      xs: "btm-nav-xs",
      sm: "btm-nav-sm",
      md: "btm-nav-md",
      lg: "btm-nav-lg",
    };

    const classes = twMerge("btm-nav", size && sizes[size], className);

    return (
      <div {...props} ref={ref} data-theme={dataTheme} className={classes}>
        {children &&
          React.Children.map(children, (child) =>
            React.cloneElement(child, {
              color: child.props.color || color,
            })
          )}
      </div>
    );
  }
);

BottomNavigationInner.displayName = "BottomNavigation";

export const BottomNavigation = Object.assign(BottomNavigationInner, {
  Item: BottomNavigationItem,
});
