import React, { forwardRef } from "react";
import { ComponentBaseProps, ComponentDirection } from "../types";
import { twMerge } from "tailwind-merge";
import "./Join.css";
import { JoinItem, JoinItemProps } from "./JoinItem";

export type { JoinItemProps };

export type JoinProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    direction?: ComponentDirection;
    responsive?: boolean;
  };

const JoinInner = forwardRef<HTMLDivElement, JoinProps>(
  (
    { children, responsive, direction, dataTheme, className, ...props },
    ref
  ) => {
    const directions = {
      vertical: "join-vertical",
      horizontal: "join-horizontal",
    };

    const classes = twMerge(
      "join",
      direction && directions[direction],
      responsive && "join-vertical lg:join-horizontal",
      className
    );

    return (
      <div ref={ref} className={classes} data-theme={dataTheme} {...props}>
        {children}
      </div>
    );
  }
);

JoinInner.displayName = "Join";

export const Join = Object.assign(JoinInner, {
  Item: JoinItem,
});
