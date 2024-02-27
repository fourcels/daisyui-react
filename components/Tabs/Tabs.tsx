import { twMerge } from "tailwind-merge";

import React, { ReactElement, forwardRef } from "react";
import { ComponentBaseProps, ComponentSize, ListOrItem } from "../types";
import { Tab, TabProps } from "./Tab";

export type { TabProps };

export type TabsProps = Omit<React.HTMLAttributes<HTMLDivElement>, "size"> &
  ComponentBaseProps & {
    children?: ListOrItem<ReactElement>;
    size?: ComponentSize;
    variant?: "bordered" | "lifted" | "boxed";
    defaultActive?: number;
    activeClassName?: string;
  };

const TabsInner = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      defaultActive = 0,
      variant,
      size,
      children,
      dataTheme,
      className,
      activeClassName,
      ...props
    },
    ref
  ): JSX.Element => {
    const [activeIdx, setActiveIdx] = React.useState(defaultActive);

    const sizes = {
      xs: "tabs-xs",
      sm: "tabs-sm",
      md: "tabs-md",
      lg: "tabs-lg",
    };

    const variants = {
      bordered: "tabs-bordered",
      lifted: "tabs-lifted",
      boxed: "tabs-boxed",
    };

    const classes = twMerge(
      "tabs",
      size && sizes[size],
      variant ? variants[variant] : "tabs-bordered",
      className
    );

    return (
      <div
        role="tablist"
        className={classes}
        ref={ref}
        data-theme={dataTheme}
        {...props}
      >
        {children &&
          React.Children.map(children, (child, idx) =>
            React.cloneElement(child, {
              active: idx === activeIdx,
              onClick: () => setActiveIdx(idx),
              activeClassName,
            })
          )}
      </div>
    );
  }
);
TabsInner.displayName = "Tabs";

export const Tabs = Object.assign(TabsInner, {
  Tab,
});
