import { twMerge } from "tailwind-merge";
import { ComponentBaseProps } from "../types";
import React from "react";

export type FormControlProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    label?: React.ReactNode;
    labelAlt?: React.ReactNode;
  };

export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({ children, label, labelAlt, dataTheme, className, ...props }, ref) => {
    const classes = twMerge("form-control", className);

    return (
      <div ref={ref} data-theme={dataTheme} className={classes} {...props}>
        {(label || labelAlt) && (
          <label className="label">
            <span className="label-text">{label}</span>
            <span className="label-text-alt">{labelAlt}</span>
          </label>
        )}
        {children}
      </div>
    );
  }
);

FormControl.displayName = "FormControl";
