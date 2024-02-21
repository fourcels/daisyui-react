import { twMerge } from "tailwind-merge";

import React, { ReactNode, forwardRef } from "react";
import { ComponentBaseProps, ComponentSize } from "../types";
import { TableRow, TableRowProps } from "./TableRow";
import { TableBody, TableBodyProps } from "./TableBody";
import { TableHead, TableHeadProps } from "./TableHead";
import { TableFoot, TableFootProps } from "./TableFoot";

export type { TableRowProps, TableBodyProps, TableHeadProps, TableFootProps };

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> &
  ComponentBaseProps & {
    size?: ComponentSize;
    zebra?: boolean;
    pinRows?: boolean;
    pinCols?: boolean;
  };

const TableInner = forwardRef<HTMLTableElement, TableProps>(
  (
    { pinRows, pinCols, zebra, size, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
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
      pinRows && "table-pin-rows",
      pinCols && "table-pin-cols",
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
TableInner.displayName = "Table";

export const Table = Object.assign(TableInner, {
  Row: TableRow,
  Body: TableBody,
  Head: TableHead,
  Foot: TableFoot,
});
