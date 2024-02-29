import { twMerge } from "tailwind-merge";
import { ComponentBaseProps } from "../types";
import React from "react";

export type FormControlProps = React.HTMLAttributes<HTMLLabelElement> &
  ComponentBaseProps & {
    label?: React.ReactNode;
    labelAlt?: React.ReactNode;
    labelAlt2?: React.ReactNode;
    labelAlt3?: React.ReactNode;
    horizontal?: boolean;
  };

export const FormControl = React.forwardRef<HTMLLabelElement, FormControlProps>(
  (
    {
      children,
      label,
      labelAlt,
      labelAlt2,
      labelAlt3,
      horizontal,
      dataTheme,
      className,
      ...props
    },
    ref
  ) => {
    const classes = twMerge(
      "form-control",
      horizontal && "flex-row gap-2 items-center",
      className
    );

    return (
      <label ref={ref} data-theme={dataTheme} className={classes} {...props}>
        {(label || labelAlt) && (
          <div className="label">
            <span className="label-text">{label}</span>
            <span className="label-text-alt">{labelAlt}</span>
          </div>
        )}
        <div className="flex flex-col">
          {children}
          {(labelAlt2 || labelAlt3) && (
            <div className="label">
              <span className="label-text-alt">{labelAlt2}</span>
              <span className="label-text-alt">{labelAlt3}</span>
            </div>
          )}
        </div>
      </label>
    );
  }
);

FormControl.displayName = "FormControl";
