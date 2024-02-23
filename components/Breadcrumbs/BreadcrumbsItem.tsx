import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type BreadcrumbsItemProps = React.LiHTMLAttributes<HTMLLIElement>;

export const BreadcrumbsItem = forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  (props, ref): JSX.Element => {
    return <li {...props} ref={ref}></li>;
  }
);

BreadcrumbsItem.displayName = "BreadcrumbsItem";
