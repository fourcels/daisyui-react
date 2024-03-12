import { forwardRef } from "react";
import { Button, ButtonProps } from "../Button";
import { twMerge } from "tailwind-merge";

export type PaginationItemProps = ButtonProps;

export const PaginationItem = forwardRef<
  HTMLButtonElement,
  PaginationItemProps
>(({ className, ...props }, ref) => {
  return (
    <Button className={twMerge("join-item", className)} ref={ref} {...props} />
  );
});

PaginationItem.displayName = "PaginationItem";
