import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type AccordionCollapseProps = React.HTMLAttributes<HTMLDivElement> & {
  bordered?: boolean;
  open?: boolean;
  arrow?: "arrow" | "plus";
};

export const AccordionCollapse = forwardRef<
  HTMLDivElement,
  AccordionCollapseProps
>(({ bordered = true, open, arrow, children, className, ...props }, ref) => {
  const arrows = {
    arrow: "collapse-arrow",
    plus: "collapse-plus",
  };

  const classes = twMerge(
    "collapse bg-base-200",
    arrow && arrows[arrow],
    open && "collapse-open",
    bordered && "border border-base-300",
    className
  );

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

AccordionCollapse.displayName = "AccordionCollapse";
