import React from "react";
import { twMerge } from "tailwind-merge";

export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h2 {...props} className={twMerge("card-title", className)} ref={ref} />
    );
  }
);

CardTitle.displayName = "CardTitle";
