import React from "react";
import { twMerge } from "tailwind-merge";

export type DrawerContentProps = React.HTMLAttributes<HTMLDivElement>;

export const DrawerContent = React.forwardRef<
  HTMLDivElement,
  DrawerContentProps
>(({ children, className, ...props }, ref) => {
  const classes = twMerge("drawer-content", className);

  return (
    <div {...props} ref={ref} className={classes}>
      {children}
    </div>
  );
});

DrawerContent.displayName = "DrawerContent";
