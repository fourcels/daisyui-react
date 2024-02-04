import React, { forwardRef } from 'react';
import { ComponentBaseProps, ComponentDirection } from '../types';
import { twMerge } from 'tailwind-merge';

export type JoinItemProps =
    React.ComponentProps<React.ElementType>
    & {
        children: React.ReactElement
    }

export const JoinItem = forwardRef<HTMLElement, JoinItemProps>((
    {
        children,
        className,
        ...props
    },
    ref
) => {


    const classes = twMerge(
        'join-item',
        className,
    )


    return React.cloneElement(children, {
        ref,
        className: classes,
        ...props,
    })
})

JoinItem.displayName = 'JoinItem'