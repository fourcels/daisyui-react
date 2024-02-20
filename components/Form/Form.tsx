import { twMerge } from "tailwind-merge";
import { ComponentBaseProps } from "../types";
import { forwardRef } from "react";
import { FormControl, FormControlProps } from "./FormControl";

export type { FormControlProps };

export type FormProps = React.HTMLAttributes<HTMLFormElement> &
  ComponentBaseProps;

const FormInner = forwardRef<HTMLFormElement, FormProps>(
  ({ children, dataTheme, className, ...props }, ref) => {
    const classes = twMerge("form", className);

    return (
      <form ref={ref} data-theme={dataTheme} className={classes} {...props}>
        {children}
      </form>
    );
  }
);

FormInner.displayName = "Form";

export const Form = Object.assign(FormInner, {
  Control: FormControl,
});
