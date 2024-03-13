import React, { forwardRef } from "react";
import { ComponentBaseProps } from "../types";
import { twMerge } from "tailwind-merge";

export type FooterTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
export const FooterTitle = forwardRef<HTMLHeadingElement, FooterTitleProps>(
  ({ children, className, ...props }, ref) => {
    const classes = twMerge("footer-title", className);

    return (
      <h6 ref={ref} className={classes} {...props}>
        {children}
      </h6>
    );
  }
);

FooterTitle.displayName = "FooterTitle";
