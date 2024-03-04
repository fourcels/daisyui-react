import { twMerge } from "tailwind-merge";
import { ComponentBaseProps } from "../types";
import React from "react";

export type FormControlProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    label?: React.ReactNode;
    labelAlt?: React.ReactNode;
    labelAlt2?: React.ReactNode;
    labelAlt3?: React.ReactNode;
  };

export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  (
    {
      children,
      label,
      labelAlt,
      labelAlt2,
      labelAlt3,
      dataTheme,
      className,
      ...props
    },
    ref
  ) => {
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
        {(labelAlt2 || labelAlt3) && (
          <label className="label">
            <span className="label-text-alt">{labelAlt2}</span>
            <span className="label-text-alt">{labelAlt3}</span>
          </label>
        )}
      </div>
    );
  }
);

FormControl.displayName = "FormControl";
