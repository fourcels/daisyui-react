import { twMerge } from "tailwind-merge";

import React, { forwardRef } from "react";

export type ChatFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const ChatFooter = forwardRef<HTMLDivElement, ChatFooterProps>(
  ({ className, ...props }, ref): JSX.Element => {
    const classes = twMerge("chat-footer opacity-50", className);

    return <div ref={ref} className={classes} {...props}></div>;
  }
);
ChatFooter.displayName = "ChatFooter";
