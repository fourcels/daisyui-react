import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type TableRowProps = React.TableHTMLAttributes<HTMLTableRowElement> & {
  active?: boolean;
  hover?: boolean;
};

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, children, hover, active, ...props }, ref): JSX.Element => {
    const classes = twMerge(hover && "hover", active && "active", className);

    return (
      <tr ref={ref} className={classes} {...props}>
        {children}
      </tr>
    );
  }
);
TableRow.displayName = "TableRow";
