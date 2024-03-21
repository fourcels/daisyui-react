import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type TabProps = React.HTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  contentClassName?: string;
  activeClassName?: string;
  indicator?: React.ReactNode;
};

export const Tab = forwardRef<HTMLAnchorElement, TabProps>(
  (
    {
      onClick,
      contentClassName,
      activeClassName,
      label,
      active,
      disabled,
      className,
      children,
      indicator,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "tab gap-2 flex",
      active && ["tab-active", activeClassName],
      disabled && "tab-disabled",
      className
    );

    return (
      <>
        <a
          onClick={onClick}
          role="tab"
          ref={ref}
          className={classes}
          {...props}
        >
          {label}
          {indicator}
        </a>
        {children && (
          <div
            role="tabpanel"
            className={twMerge("tab-content p-4", contentClassName)}
          >
            {children}
          </div>
        )}
      </>
    );
  }
);
Tab.displayName = "Tab";
