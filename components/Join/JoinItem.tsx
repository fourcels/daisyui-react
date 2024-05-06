import React, { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

export type JoinItemProps = {
  children?: ReactElement;
};

export const JoinItem = ({ children }: JoinItemProps) => {
  return (
    children &&
    React.cloneElement(children, {
      className: twMerge("join-item", children.props.className),
    })
  );
};

JoinItem.displayName = "JoinItem";
