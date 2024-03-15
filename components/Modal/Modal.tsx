import React, { ReactElement, forwardRef, useCallback, useRef } from "react";
import { twMerge } from "tailwind-merge";

import { ComponentBaseProps } from "../types";

import { ModalHeader, ModalHeaderProps } from "./ModalHeader";
import { ModalBody, ModalBodyProps } from "./ModalBody";
import { ModalAction, ModalActionProps } from "./ModalAction";
import { Button } from "../Button";
import { ModalContext } from "./ModalContext";
import { ModalActionButton, ModalActionButtonProps } from "./ModalActionButton";

export type {
  ModalHeaderProps,
  ModalBodyProps,
  ModalActionProps,
  ModalActionButtonProps,
};

export type ModalProps = React.HTMLAttributes<HTMLDialogElement> &
  ComponentBaseProps & {
    open?: boolean;
    responsive?: boolean;
    backdrop?: boolean;
    trigger?: ReactElement;
    closable?: boolean;
    position?: "top" | "middle" | "bottom";
  };

const ModalInner = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      position,
      trigger,
      open,
      closable = true,
      children,
      responsive,
      backdrop,
      dataTheme,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const dialogRef = React.useRef<HTMLDialogElement>(null);

    React.useImperativeHandle(ref, () => dialogRef.current!);

    const positions = {
      top: "modal-top",
      middle: "modal-middle",
      bottom: "modal-bottom",
    };

    const containerClasses = twMerge(
      "modal",
      open && "modal-open",
      position && positions[position],
      responsive && "modal-bottom sm:modal-middle"
    );

    const bodyClasses = twMerge("modal-box", className);

    return (
      <ModalContext.Provider value={dialogRef}>
        {trigger &&
          React.cloneElement(trigger, {
            onClick: () => {
              dialogRef.current?.showModal();
            },
          })}
        <dialog
          {...props}
          aria-label="Modal"
          open={open}
          data-theme={dataTheme}
          className={containerClasses}
          ref={dialogRef}
        >
          <div data-theme={dataTheme} className={bodyClasses}>
            {closable && (
              <Button
                onClick={() => dialogRef.current?.close()}
                size="sm"
                color="ghost"
                shape="circle"
                className="absolute right-2 top-2"
              >
                ✕
              </Button>
            )}
            {children}
          </div>
          {backdrop && (
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          )}
        </dialog>
      </ModalContext.Provider>
    );
  }
);

ModalInner.displayName = "Modal";

export const Modal = Object.assign(ModalInner, {
  Header: ModalHeader,
  Body: ModalBody,
  Action: ModalAction,
  ActionButton: ModalActionButton,
});
