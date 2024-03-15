import React from "react";
import { twMerge } from "tailwind-merge";
import { useDrawer } from "./DrawerContext";

export type DrawerSideProps = React.HTMLAttributes<HTMLDivElement> & {
  overlay?: boolean;
  wrapperClassName?: string;
};

export const DrawerSide = React.forwardRef<HTMLDivElement, DrawerSideProps>(
  ({ wrapperClassName, children, className, ...props }, ref) => {
    const { setOpen, overlay } = useDrawer();

    return (
      <div {...props} className={twMerge("drawer-side z-20", wrapperClassName)}>
        {overlay && (
          <div
            ref={ref}
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={() => setOpen(false)}
          ></div>
        )}
        <div className={twMerge("h-full bg-base-100", className)}>
          {children}
        </div>
      </div>
    );
  }
);

DrawerSide.displayName = "DrawerSide";
