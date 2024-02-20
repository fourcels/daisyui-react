import { twMerge } from 'tailwind-merge'

import { ComponentBaseProps } from '../types'
import React, { forwardRef } from 'react'
import { ChatBubble, ChatBubbleProps } from './ChatBubble'
import { ChatImage, ChatImageProps } from './ChatImage'
import { ChatHeader, ChatHeaderProps } from './ChatHeader'
import { ChatFooter, ChatFooterProps } from './ChatFooter'

export type { ChatBubbleProps, ChatImageProps, ChatHeaderProps, ChatFooterProps }

export type ChatProps = React.HTMLAttributes<HTMLDivElement>
    & ComponentBaseProps
    & {
        position?: 'start' | 'end'
    }

const ChatInner = forwardRef<HTMLDivElement, ChatProps>((
    {
        position,
        dataTheme,
        className,
        ...props
    },
    ref
): JSX.Element => {

    const positions = {
        start: 'chat-start',
        end: 'chat-end',
    }

    const classes = twMerge(
        'chat',
        position ? positions[position] : 'chat-start',
        className,
    )

    return (
        <div ref={ref} className={classes} data-theme={dataTheme} {...props}></div>
    )
})
ChatInner.displayName = 'Chat'

export const Chat = Object.assign(ChatInner, {
    Bubble: ChatBubble,
    Image: ChatImage,
    Header: ChatHeader,
    Footer: ChatFooter,
})