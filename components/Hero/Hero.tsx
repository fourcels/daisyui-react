import React, { forwardRef } from "react";
import { ComponentBaseProps } from "../types";
import { twMerge } from "tailwind-merge";
import { HeroContent, HeroContentProps } from "./HeroContent";

export type { HeroContentProps };

export type HeroProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    overlayImage?: string;
  };

const HeroInner = forwardRef<HTMLDivElement, HeroProps>(
  ({ overlayImage, style, children, dataTheme, className, ...props }, ref) => {
    const classes = twMerge("hero", className);

    return (
      <div
        ref={ref}
        className={classes}
        style={{
          backgroundImage: overlayImage && `url(${overlayImage})`,
          ...style,
        }}
        {...props}
      >
        {overlayImage && <div className="hero-overlay"></div>}
        {children}
      </div>
    );
  }
);

HeroInner.displayName = "Hero";

export const Hero = Object.assign(HeroInner, {
  Content: HeroContent,
});
