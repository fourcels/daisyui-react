import React, { ReactElement, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ListOrItem } from "../types";
import { BreadcrumbsItem, BreadcrumbsItemProps } from "./BreadcrumbsItem";

export type { BreadcrumbsItemProps };

export type BreadcrumbsProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> &
  ComponentBaseProps & {
    children?: ListOrItem<ReactElement>;
  };

const BreadcrumbsInner = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ children, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge("text-sm breadcrumbs", className);

    return (
      <div {...props} ref={ref} data-theme={dataTheme} className={classes}>
        <ul>{children}</ul>
      </div>
    );
  }
);

BreadcrumbsInner.displayName = "Breadcrumbs";

export const Breadcrumbs = Object.assign(BreadcrumbsInner, {
  Item: BreadcrumbsItem,
});
