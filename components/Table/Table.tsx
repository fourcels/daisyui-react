import { twMerge } from "tailwind-merge";

import React, { forwardRef } from "react";
import { ComponentBaseProps, ComponentSize } from "../types";

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> &
  ComponentBaseProps & {
    size?: ComponentSize;
    zebra?: boolean;
  };

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ zebra, size, dataTheme, className, ...props }, ref): JSX.Element => {
    const sizes = {
      xs: "table-xs",
      sm: "table-sm",
      md: "table-md",
      lg: "table-lg",
    };

    const classes = twMerge(
      "table",
      size && sizes[size],
      zebra && "table-zebra",
      className
    );

    return (
      <table
        className={classes}
        ref={ref}
        data-theme={dataTheme}
        {...props}
      ></table>
    );
  }
);
Table.displayName = "Table";
