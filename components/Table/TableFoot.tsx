import React, { forwardRef } from "react";

export type TableFootProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

export const TableFoot = forwardRef<HTMLTableSectionElement, TableFootProps>(
  ({ children, ...props }, ref): JSX.Element => {
    return (
      <tfoot ref={ref} {...props}>
        {children}
      </tfoot>
    );
  }
);
TableFoot.displayName = "TableFoot";
