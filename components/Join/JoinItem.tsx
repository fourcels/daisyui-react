import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type JoinItemProps = {
    children: React.ReactElement
}

export const JoinItem = forwardRef<HTMLElement, JoinItemProps>((
    {
        children,
        ...props
    },
    ref
) => {


    const classes = twMerge(
        'join-item',
        children.props.className,
    )


    return React.cloneElement(children, {
        ref,
        className: classes,
        ...props,
    })
})

JoinItem.displayName = 'JoinItem'