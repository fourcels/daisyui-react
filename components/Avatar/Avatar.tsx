import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps,
    ComponentColor,
    ComponentSize,
} from '../types'
import { Mask, MaskProps } from '../Mask'

export type AvatarProps =
    Omit<React.ComponentProps<'div'>, 'size' | 'color'>
    & ComponentBaseProps
    & {
        size?: ComponentSize
        shape?: 'square' | 'circle'
        mask?: MaskProps['mask']
        color?: Exclude<ComponentColor, 'ghost'>
        ringColor?: Exclude<ComponentColor, 'ghost'>
        ring?: boolean
        placehoder?: boolean
    }

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((
    {

        placehoder,
        mask,
        shape,
        size,
        color,
        ring,
        ringColor,
        children,
        dataTheme,
        className,
        ...props
    },
    ref
): JSX.Element => {

    const sizes = {
        xs: 'w-8',
        sm: 'w-12',
        md: 'w-16',
        lg: 'w-24'
    }

    const shapes = {
        square: 'rounded',
        circle: 'rounded-full'
    }

    const colors = {
        'neutral': 'bg-neutral',
        'primary': 'bg-primary',
        'secondary': 'bg-secondary',
        'accent': 'bg-accent',
        'info': 'bg-info',
        'success': 'bg-success',
        'warning': 'bg-warning',
        'error': 'bg-error',
    }
    const ringColors = {
        'neutral': 'ring-neutral',
        'primary': 'ring-primary',
        'secondary': 'ring-secondary',
        'accent': 'ring-accent',
        'info': 'ring-info',
        'success': 'ring-success',
        'warning': 'ring-warning',
        'error': 'ring-error',
    }

    const classes = twMerge(
        'w-16 rounded bg-neutral ring-offset-base-100 ring-offset-2',
        size && sizes[size],
        shape && shapes[shape],
        color && colors[color],
        ringColor && ringColors[ringColor],
        ring && 'ring',
    )

    const content = mask ? (
        <Mask mask={mask} className={classes}>{children}</Mask>
    ) : (
        <div className={classes}>{children}</div>
    )

    return (
        <div
            {...props}
            className="avatar placeholder"
            ref={ref}
            data-theme={dataTheme}
        >
            {content}
        </div>
    )
}
)

Avatar.displayName = 'Avatar'
