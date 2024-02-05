import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps,
    ComponentColor,
    ComponentSize,
} from '../types'

export type AvatarProps =
    React.ComponentProps<'div'>
    & ComponentBaseProps
    & {
        mask?: boolean
    }

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
    (
        {
            children,
            dataTheme,
            className,
            ...props
        },
        ref
    ): JSX.Element => {

        const classes = twMerge(
        )

        return (
            <div
                {...props}
                className="avatar"
                ref={ref}
                data-theme={dataTheme}
            >
                <div className={classes}>
                    {children}
                </div>
            </div>
        )
    }
)

Avatar.displayName = 'Avatar'
