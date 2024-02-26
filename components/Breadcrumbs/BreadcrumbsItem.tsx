import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type BreadcrumbsItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  icon: React.ReactNode;
};

export const BreadcrumbsItem = forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  ({ icon, children, ...props }, ref): JSX.Element => {
    const content = React.useMemo(() => {
      if (!icon) {
        return children;
      }
      return (
        <div className="flex items-center gap-2">
          {icon}
          {children}
        </div>
      );
    }, [children, icon]);

    return (
      <li {...props} ref={ref}>
        {content}
      </li>
    );
  }
);

BreadcrumbsItem.displayName = "BreadcrumbsItem";
