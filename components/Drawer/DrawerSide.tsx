import React from "react";
import { twMerge } from "tailwind-merge";
import { useDrawer } from "./DrawerContext";

export type DrawerSideProps = React.HTMLAttributes<HTMLDivElement> & {
  overlay?: boolean;
  contentClassName?: string;
};

export const DrawerSide = React.forwardRef<HTMLDivElement, DrawerSideProps>(
  ({ contentClassName, children, className, ...props }, ref) => {
    const { setOpen, overlay } = useDrawer();

    const classes = twMerge("drawer-side z-20", className);

    return (
      <div {...props} ref={ref} className={classes}>
        {overlay && (
          <div
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={() => setOpen(false)}
          ></div>
        )}
        <div className={twMerge("min-h-full relative", contentClassName)}>
          {children}
        </div>
      </div>
    );
  }
);

DrawerSide.displayName = "DrawerSide";
