import React, { ReactElement, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps, ListOrItem,
} from '../types'

export type AvatarGroupProps = Omit<React.ComponentProps<'div'>, 'children'>
    & ComponentBaseProps
    & {
        children?: ListOrItem<ReactElement>
    }


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
