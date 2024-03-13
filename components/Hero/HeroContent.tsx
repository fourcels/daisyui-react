import React, { forwardRef } from "react";
import { ComponentBaseProps } from "../types";
import { twMerge } from "tailwind-merge";

export type HeroContentProps = React.HTMLAttributes<HTMLDivElement>;
export const HeroContent = forwardRef<HTMLDivElement, HeroContentProps>(
  ({ children, className, ...props }, ref) => {
    const classes = twMerge("hero-content", className);

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

HeroContent.displayName = "HeroContent";
