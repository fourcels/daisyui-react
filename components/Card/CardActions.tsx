import React from "react";
import { twMerge } from "tailwind-merge";

export type CardActionsProps = React.HTMLAttributes<HTMLDivElement>;

export const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
  ({ className, ...props }, ref) => (
    <div
      {...props}
      className={twMerge("card-actions justify-end", className)}
      ref={ref}
    />
  )
);

CardActions.displayName = "CardActions";
