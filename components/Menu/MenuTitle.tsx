import React from "react";
import { twMerge } from "tailwind-merge";

export type MenuTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  icon?: React.ReactNode;
};

export const MenuTitle = React.forwardRef<HTMLHeadingElement, MenuTitleProps>(
  ({ icon, children, className, ...props }, ref) => {
    const classes = twMerge("menu-title flex gap-4", className);

    return (
      <h2 {...props} className={classes} ref={ref}>
        {icon}
        {children}
      </h2>
    );
  }
);

MenuTitle.displayName = "MenuTitle";
