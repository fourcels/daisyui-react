import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps } from "../types";

export type MenuTitleProps<T extends ElementType = "li"> =
  React.HTMLAttributes<HTMLElement> &
    ComponentBaseProps & {
      tag?: T;
    };

export const MenuTitle = React.forwardRef<HTMLLIElement, MenuTitleProps>(
  ({ className, tag: Tag = "li", ...props }, ref) => {
    const classes = twMerge("menu-title", className);

    return <Tag {...props} className={classes} ref={ref} />;
  }
);

MenuTitle.displayName = "MenuTitle";
