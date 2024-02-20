import React from "react";
import { twMerge } from "tailwind-merge";

export type ModalBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, className, ...props }, ref) => {
    const classes = twMerge("modal-body py-4", className);
    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    );
  }
);

ModalBody.displayName = "ModalBody";
