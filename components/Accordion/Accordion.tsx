import React, { ReactElement, forwardRef } from "react";
import { ComponentBaseProps, ListOrItem } from "../types";
import { twMerge } from "tailwind-merge";
import { AccordionItem, AccordionItemProps } from "./AccordionItem";

export type { AccordionItemProps };

export type AccordionProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> &
  ComponentBaseProps & {
    children?: ListOrItem<ReactElement>;
    defaultActive?: number;
    bordered?: boolean;
    icon?: AccordionItemProps["icon"];
    join?: boolean;
  };

const AccordionInner = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      join,
      defaultActive = 0,
      icon,
      bordered = true,
      children,
      dataTheme,
      className,
      ...props
    },
    ref
  ) => {
    const [active, setActive] = React.useState<number>(defaultActive);

    const classes = twMerge(
      "accordion",
      join ? "join join-vertical" : "flex flex-col gap-2",
      className
    );
    return (
      <div ref={ref} className={classes} data-theme={dataTheme} {...props}>
        {children &&
          React.Children.map(children, (child, idx) => {
            return React.cloneElement(child, {
              open: idx === active,
              onClick: () => setActive(idx),
              className: twMerge(child.props.className, join && "join-item"),
              icon,
              bordered,
            });
          })}
      </div>
    );
  }
);

AccordionInner.displayName = "Accordion";

export const Accordion = Object.assign(AccordionInner, {
  Item: AccordionItem,
});
