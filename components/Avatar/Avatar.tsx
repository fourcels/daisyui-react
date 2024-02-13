import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps,
    ComponentColor,
    ComponentSize,
} from '../types'
import { Mask, MaskProps } from '../Mask'
import "./Avatar.css"

export type AvatarProps =
    Omit<React.ComponentProps<'div'>, 'size' | 'color'>
    & ComponentBaseProps
    & {
        size?: ComponentSize
        shape?: 'square' | 'circle'
        mask?: MaskProps['mask']
        color?: Exclude<ComponentColor, 'ghost'>
        ring?: 'ring' | Exclude<ComponentColor, 'ghost'>
        placeholder?: boolean
    }

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((
    {

        placeholder,
        mask,
        shape,
        size,
        color,
        ring,
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
    const rings = {
        'ring': 'avatar-ring',
        'neutral': 'avatar-ring ring-neutral',
        'primary': 'avatar-ring ring-primary',
        'secondary': 'avatar-ring ring-secondary',
        'accent': 'avatar-ring ring-accent',
        'info': 'avatar-ring ring-info',
        'success': 'avatar-ring ring-success',
        'warning': 'avatar-ring ring-warning',
        'error': 'avatar-ring ring-error',
    }

    const classes = twMerge(
        'w-16 rounded bg-neutral',
        size && sizes[size],
        shape && shapes[shape],
        color && colors[color],
        ring && rings[ring],
    )

    const content = mask ? (
        <Mask mask={mask} className={classes}>{children}</Mask>
    ) : (
        <div className={classes}>{children}</div>
    )

    const avatarClasses = twMerge(
        'avatar',
        placeholder && 'placeholder'
    )

    return (
        <div
            {...props}
            className={avatarClasses}
            ref={ref}
            data-theme={dataTheme}
        >
            {content}
        </div>
    )
}
)

Avatar.displayName = 'Avatar'
