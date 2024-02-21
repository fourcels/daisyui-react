import React, { forwardRef } from "react";

export type TableHeadProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, ...props }, ref): JSX.Element => {
    return (
      <thead ref={ref} {...props}>
        {children}
      </thead>
    );
  }
);
TableHead.displayName = "TableHead";
