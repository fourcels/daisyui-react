import React, { Children, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps, ComponentPosition } from "../types";
import { useOutsideClick } from "../utils";

export type DropdownProps<T extends HTMLElement = HTMLDivElement> =
  React.HTMLAttributes<T> &
    ComponentBaseProps & {
      trigger: React.ReactElement;
      position?: ComponentPosition;
      end?: boolean;
      hover?: boolean;
      open?: boolean;
      contentClassName?: string;
    };

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      open,
      children,
      trigger,
      position,
      hover,
      end,
      dataTheme,
      className,
      contentClassName,
      ...props
    },
    ref
  ) => {
    const [show, setShow] = React.useState(false);

    const dropdownRef = useOutsideClick<HTMLDivElement>(() => setShow(false));

    React.useImperativeHandle(ref, () => dropdownRef.current!);

    const positions = {
      top: "dropdown-top",
      bottom: "dropdown-bottom",
      left: "dropdown-left",
      right: "dropdown-right",
    };

    const classes = twMerge(
      "dropdown",
      position && positions[position],
      end && "dropdown-end",
      hover && "dropdown-hover",
      open && "dropdown-open",
      show && "dropdown-open",
      className
    );

    return (
      <div
        {...props}
        ref={dropdownRef}
        data-theme={dataTheme}
        className={classes}
      >
        {React.cloneElement(trigger, {
          onClick: () => setShow(true),
        })}
        <div className={twMerge("dropdown-content z-10", contentClassName)}>
          {children}
        </div>
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";
