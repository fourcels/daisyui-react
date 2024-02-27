import { twMerge } from "tailwind-merge";

import React, { ReactElement, forwardRef } from "react";
import { ComponentBaseProps, ListOrItem } from "../types";
import { Step, StepProps } from "./Step";

export type { StepProps };
export type StepsProps = Omit<
  React.HTMLAttributes<HTMLUListElement>,
  "children" | "color"
> &
  ComponentBaseProps & {
    children?: ListOrItem<ReactElement>;
    vertical?: boolean;
    responsive?: boolean;
    color?: StepProps["color"];
  };

const StepsInner = forwardRef<HTMLUListElement, StepsProps>(
  (
    { color, responsive, vertical, children, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "steps",
      vertical && "steps-vertical",
      responsive && "steps-vertical lg:steps-horizontal",
      className
    );

    return (
      <ul className={classes} ref={ref} data-theme={dataTheme} {...props}>
        {children &&
          React.Children.map(children, (child) =>
            React.cloneElement(child, {
              color: child.props.color || color,
            })
          )}
      </ul>
    );
  }
);
StepsInner.displayName = "Steps";

export const Steps = Object.assign(StepsInner, {
  Step,
});
