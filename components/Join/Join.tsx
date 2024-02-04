import React, { forwardRef } from 'react';
import { ComponentBaseProps, ComponentDirection } from '../types';
import { twMerge } from 'tailwind-merge';
import { JoinItem, JoinItemProps } from './JoinItem';


export type { JoinItemProps }

export type JoinProps =
    React.ComponentProps<'div'>
    & ComponentBaseProps
    & {
        direction?: ComponentDirection
        responsive?: boolean
    }

const JoinInner = forwardRef<HTMLDivElement, JoinProps>((
    {
        responsive,
        direction,
        dataTheme,
        className,
        ...props
    },
    ref
) => {

    const directions = {
        vertical: 'join-vertical',
        horizontal: 'join-horizontal',
    }

    const classes = twMerge(
        'join',
        direction && directions[direction],
        responsive && 'join-vertical lg:join-horizontal'
    )


    return (
        <div
            ref={ref}
            className={classes}
            {...props}
        />
    )
})

JoinInner.displayName = 'Join'

export const Join = Object.assign(JoinInner, {
    Item: JoinItem
})