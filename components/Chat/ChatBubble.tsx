import { twMerge } from "tailwind-merge";

import React, { forwardRef } from "react";
import { ComponentColor } from "../types";

export type ChatBubbleProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "color"
> & {
  color?: Exclude<ComponentColor, "neutral" | "ghost">;
};

export const ChatBubble = forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ color, className, ...props }, ref): JSX.Element => {
    const colors = {
      primary: "chat-bubble-primary",
      secondary: "chat-bubble-secondary",
      accent: "chat-bubble-accent",
      info: "chat-bubble-info",
      success: "chat-bubble-success",
      warning: "chat-bubble-warning",
      error: "chat-bubble-error",
    };

    const classes = twMerge("chat-bubble", color && colors[color], className);

    return <div ref={ref} className={classes} {...props}></div>;
  }
);
ChatBubble.displayName = "ChatBubble";
