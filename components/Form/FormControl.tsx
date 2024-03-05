import { twMerge } from "tailwind-merge";
import { ComponentBaseProps } from "../types";
import React from "react";

export type FormControlProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    label?: React.ReactNode;
    labelTR?: React.ReactNode;
    labelBL?: React.ReactNode;
    labelBR?: React.ReactNode;
  };

export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  (
    {
      children,
      label,
      labelTR,
      labelBL,
      labelBR,
      dataTheme,
      className,
      ...props
    },
    ref
  ) => {
    const classes = twMerge("form-control", className);

    return (
      <div ref={ref} data-theme={dataTheme} className={classes} {...props}>
        {(label || labelTR) && (
          <label className="label">
            <span className="label-text">{label}</span>
            <span className="label-text-alt">{labelTR}</span>
          </label>
        )}
        {children}
        {(labelBL || labelBR) && (
          <label className="label">
            <span className="label-text-alt">{labelBL}</span>
            <span className="label-text-alt">{labelBR}</span>
          </label>
        )}
      </div>
    );
  }
);

FormControl.displayName = "FormControl";
