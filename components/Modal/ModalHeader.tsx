import React from "react";
import { twMerge } from "tailwind-merge";

export type ModalHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const classes = twMerge("modal-header font-bold text-lg", className);
    return (
      <h3 {...props} className={classes} ref={ref}>
        {children}
      </h3>
    );
  }
);

ModalHeader.displayName = "ModalHeader";
