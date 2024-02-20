import React from "react";
import { twMerge } from "tailwind-merge";

export type ModalActionProps = React.HTMLAttributes<HTMLDivElement>;

export const ModalAction = React.forwardRef<HTMLDivElement, ModalActionProps>(
  ({ children, className, ...props }, ref) => {
    const classes = twMerge("modal-action", className);
    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    );
  }
);

ModalAction.displayName = "ModalAction";
