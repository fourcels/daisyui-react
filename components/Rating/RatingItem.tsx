import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import "./Rating.css";
import { ComponentColor } from "../types";

const masks = {
  squircle: "mask-squircle",
  heart: "mask-heart",
  hexagon: "mask-hexagon",
  "hexagon-2": "mask-hexagon-2",
  decagon: "mask-decagon",
  pentagon: "mask-pentagon",
  diamond: "mask-diamond",
  square: "mask-square",
  circle: "mask-circle",
  parallelogram: "mask-parallelogram",
  "parallelogram-2": "mask-parallelogram-2",
  "parallelogram-3": "mask-parallelogram-3",
  "parallelogram-4": "mask-parallelogram-4",
  star: "mask-star",
  "star-2": "mask-star-2",
  triangle: "mask-triangle",
  "triangle-2": "mask-triangle-2",
  "triangle-3": "mask-triangle-3",
  "triangle-4": "mask-triangle-4",
};

const halfs = {
  "half-1": "mask-half-1",
  "half-2": "mask-half-2",
};

export type RatingItemProps = React.ButtonHTMLAttributes<HTMLInputElement> & {
  color?: Exclude<ComponentColor, "neutral" | "ghost">;
  mask?: keyof typeof masks;
  half?: keyof typeof halfs;
  active?: boolean;
};

export const RatingItem = forwardRef<HTMLInputElement, RatingItemProps>(
  ({ active, color, half, mask, className, ...props }, ref): JSX.Element => {
    const colors = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      accent: "bg-accent",
      info: "bg-info",
      success: "bg-success",
      warning: "bg-warning",
      error: "bg-error",
    };

    const classes = twMerge(
      "mask",
      mask ? masks[mask] : "mask-star",
      half && halfs[half],
      color && colors[color],
      active && "active",
      className
    );
    return <input type="button" {...props} className={classes} ref={ref} />;
  }
);

RatingItem.displayName = "RatingItem";
