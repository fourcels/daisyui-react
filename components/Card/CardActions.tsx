import React from "react";
import { twMerge } from "tailwind-merge";
import { ComponentBaseProps } from "../types";

export type CardActionsProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps;

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
