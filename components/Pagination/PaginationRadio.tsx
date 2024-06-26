import { forwardRef } from "react";
import { Button, ButtonProps } from "../Button";
import { twMerge } from "tailwind-merge";

export type PaginationRadioProps = ButtonProps<"input">;

export const PaginationRadio = forwardRef<
  HTMLInputElement,
  PaginationRadioProps
>(({ className, name = "pagination", ...props }, ref) => {
  return (
    <Button
      as="input"
      type="radio"
      shape="square"
      name={name}
      className={twMerge("join-item", className)}
      ref={ref}
      {...props}
    />
  );
});

PaginationRadio.displayName = "PaginationRadio";
