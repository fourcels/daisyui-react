import React, { ReactElement, forwardRef } from "react";
import { ComponentBaseProps, ComponentDirection } from "../types";
import { twMerge } from "tailwind-merge";

export type JoinProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children"> &
  ComponentBaseProps & {
    children?: ReactElement | ReactElement[];
    direction?: ComponentDirection;
    responsive?: boolean;
  };

export const Join = forwardRef<HTMLDivElement, JoinProps>(
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
      <div ref={ref} className={classes} {...props}>
        {children &&
          React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              className: twMerge("join-item", child.props.className),
            });
          })}
      </div>
    );
  }
);

Join.displayName = "Join";
