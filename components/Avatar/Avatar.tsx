import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps,
    ComponentColor,
    ComponentSize,
} from '../types'
import { Mask, MaskProps } from '../Mask'
import "./Avatar.css"
import { AvatarGroup, AvatarGroupProps } from './AvatarGroup'

export type { AvatarGroupProps }

export type AvatarProps =
    Omit<React.ComponentProps<'div'>, 'size' | 'color'>
    & ComponentBaseProps
    & {
        alt?: string
        src?: string
        size?: ComponentSize
        shape?: 'square' | 'circle'
        mask?: MaskProps['mask']
        color?: Exclude<ComponentColor, 'ghost'>
        ring?: 'ring' | Exclude<ComponentColor, 'ghost'>
        indicator?: 'online' | 'offline'
    }

const AvatarInner = forwardRef<HTMLDivElement, AvatarProps>((
    {
        alt = 'avatar',
        src,
        indicator,
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
        ring: 'avatar-ring',
        neutral: 'avatar-ring ring-neutral',
        primary: 'avatar-ring ring-primary',
        secondary: 'avatar-ring ring-secondary',
        accent: 'avatar-ring ring-accent',
        info: 'avatar-ring ring-info',
        success: 'avatar-ring ring-success',
        warning: 'avatar-ring ring-warning',
        error: 'avatar-ring ring-error',
    }

    const indicators = {
        online: 'online',
        offline: 'offline',
    }

    const classes = twMerge(
        'w-16 rounded bg-neutral',
        size && sizes[size],
        shape && shapes[shape],
        color && colors[color],
        ring && rings[ring],
    )
    const contentChildren = src ? <img src={src} alt={alt} /> : children
    const content = mask ? (
        <Mask mask={mask} className={classes}>{contentChildren}</Mask>
    ) : (
        <div className={classes}>{contentChildren}</div>
    )

    const avatarClasses = twMerge(
        'avatar placeholder',
        indicator && indicators[indicator],
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

AvatarInner.displayName = 'Avatar'

export const Avatar = Object.assign(AvatarInner, {
    Group: AvatarGroup
})