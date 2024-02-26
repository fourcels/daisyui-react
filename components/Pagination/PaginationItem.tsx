import { Button, ButtonProps } from "../Button";

export type PaginationItemProps = ButtonProps;

export const PaginationItem = Object.assign(Button, {
  displayName: "PaginationItem",
});
