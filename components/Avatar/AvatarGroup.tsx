import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps,
} from '../types'

export type AvatarGroupProps =
    React.ComponentProps<'div'>
    & ComponentBaseProps


export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>((
    {
        children,
        dataTheme,
        className,
        ...props
    },
    ref
): JSX.Element => {
    const classes = twMerge(
        'avatar-group -space-x-6',
        className
    )
    return (
        <div
            {...props}
            className={classes}
            ref={ref}
            data-theme={dataTheme}
        >
            {children}
        </div>
    )
}
)

AvatarGroup.displayName = 'AvatarGroup'
