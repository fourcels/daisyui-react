import { twMerge } from "tailwind-merge";

import React, { forwardRef } from "react";
import { Avatar, AvatarProps } from "../Avatar";

export type ChatImageProps = AvatarProps;

export const ChatImage = forwardRef<HTMLDivElement, ChatImageProps>(
  ({ className, ...props }, ref): JSX.Element => {
    const classes = twMerge("chat-image", className);
    return (
      <Avatar
        ref={ref}
        shape="circle"
        size="sm"
        className={classes}
        {...props}
      />
    );
  }
);
ChatImage.displayName = "ChatImage";
