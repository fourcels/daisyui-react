import React from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps } from "../types";
import { DrawerSide, DrawerSideProps } from "./DrawerSide";
import { DrawerContent, DrawerContentProps } from "./DrawerContent";
import { DrawerContext } from "./DrawerContext";
import { DrawerToggle, DrawerToggleProps } from "./DrawerToggle";
import "./Drawer.css";

export type { DrawerSideProps, DrawerContentProps, DrawerToggleProps };

export type DrawerProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> &
  ComponentBaseProps & {
    open?: boolean;
    end?: boolean;
    onClose?: (open: boolean) => void;
    overlay?: boolean;
    responsive?: boolean;
  };

const DrawerInner = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      responsive,
      open = false,
      onClose,
      overlay = true,
      children,
      end,
      dataTheme,
      className,
      ...props
    },
    ref
  ) => {
    const [openInner, setOpenInner] = React.useState(open);

    React.useEffect(() => {
      setOpenInner(open);
    }, [open]);

    const classes = twMerge(
      "drawer",
      end && "drawer-end",
      responsive && "lg:drawer-open",
      className
    );

    return (
      <DrawerContext.Provider
        value={{ open: openInner, setOpen: setOpenInner, overlay }}
      >
        <div {...props} ref={ref} data-theme={dataTheme} className={classes}>
          <input
            type="checkbox"
            checked={openInner}
            onChange={(e) => setOpenInner(e.target.checked)}
            className="drawer-toggle"
          />
          {children}
        </div>
      </DrawerContext.Provider>
    );
  }
);

DrawerInner.displayName = "Drawer";

export const Drawer = Object.assign(DrawerInner, {
  Toggle: DrawerToggle,
  Side: DrawerSide,
  Content: DrawerContent,
});
