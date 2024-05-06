import React, { forwardRef } from "react";
import { ComponentBaseProps } from "../types";
import { twMerge } from "tailwind-merge";
import { FooterTitle, FooterTitleProps } from "./FooterTitle";

export type { FooterTitleProps };

export type FooterProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    center?: boolean;
  };

const FooterInner = forwardRef<HTMLDivElement, FooterProps>(
  ({ center, children, dataTheme, className, ...props }, ref) => {
    const classes = twMerge("footer", center && "footer-center", className);

    return (
      <div ref={ref} data-theme={dataTheme} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

FooterInner.displayName = "Footer";

export const Footer = Object.assign(FooterInner, {
  Title: FooterTitle,
});
