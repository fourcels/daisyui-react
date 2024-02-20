import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type SwapOnProps = React.HTMLAttributes<HTMLDivElement>;

export const SwapOn = forwardRef<HTMLDivElement, SwapOnProps>(
  ({ className, ...props }, ref) => {
    const classes = twMerge("swap-on", className);

    return <div ref={ref} className={classes} {...props}></div>;
  }
);

SwapOn.displayName = "SwapOn";
