import { twMerge } from "tailwind-merge";

import React, { forwardRef } from "react";

export type ChatHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const ChatHeader = forwardRef<HTMLDivElement, ChatHeaderProps>(
  ({ className, ...props }, ref): JSX.Element => {
    const classes = twMerge("chat-header", className);

    return <div ref={ref} className={classes} {...props}></div>;
  }
);
ChatHeader.displayName = "ChatHeader";
