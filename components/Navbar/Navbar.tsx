import React from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps } from "../types";
import { NavbarStart, NavbarStartProps } from "./NavbarStart";
import { NavbarCenter, NavbarCenterProps } from "./NavbarCenter";
import { NavbarEnd, NavbarEndProps } from "./NavbarEnd";

export type { NavbarStartProps, NavbarCenterProps, NavbarEndProps };

export type NavbarProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    shadow?: boolean;
    rounded?: boolean;
  };

const NavbarInner = React.forwardRef<HTMLDivElement, NavbarProps>(
  (
    { children, shadow, rounded, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "navbar bg-base-100",
      shadow && "shadow-md",
      rounded && "rounded-box",
      className
    );

    return (
      <div
        role="navigation"
        aria-label="Navbar"
        {...props}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export const Navbar = Object.assign(NavbarInner, {
  Start: NavbarStart,
  Center: NavbarCenter,
  End: NavbarEnd,
});
