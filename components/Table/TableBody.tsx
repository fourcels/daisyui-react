import React, { ReactElement, forwardRef } from "react";
import { ListOrItem } from "../types";

export type TableBodyProps =
  React.TableHTMLAttributes<HTMLTableSectionElement> & {
    children?: ListOrItem<ReactElement>;
    hover?: boolean;
  };

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, hover, ...props }, ref): JSX.Element => {
    return (
      <tbody ref={ref} {...props}>
        {children &&
          React.Children.map(children, (child) =>
            React.cloneElement(child, {
              hover: child.props.hover || hover,
            })
          )}
      </tbody>
    );
  }
);
TableBody.displayName = "TableBody";
