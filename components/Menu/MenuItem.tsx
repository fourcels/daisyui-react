import React from "react";
import { twMerge } from "tailwind-merge";

export type MenuItemProps = Omit<
  React.LiHTMLAttributes<HTMLLIElement>,
  "title"
> & {
  disabled?: boolean;
  active?: boolean;
  title?: boolean;
};

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  ({ title, className, disabled, active, ...props }, ref) => {
    const classes = twMerge(
      active && "active",
      disabled && "disabled",
      title && "menu-title",
      className
    );
    return <li role="menuitem" className={classes} {...props} ref={ref} />;
  }
);

MenuItem.displayName = "MenuItem";
