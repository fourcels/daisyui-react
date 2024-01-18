import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps,
    ComponentColor,
    ComponentSize,
} from '../types'

import { forwardRef } from 'react'


export type ToggleProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'color'
> &
    ComponentBaseProps & {
        size?: ComponentSize
        color?: Exclude<ComponentColor, 'neutral' | 'ghost'>
    }

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>((
    {
        size,
        color,
        dataTheme,
        className,
        ...props
    },
    ref
) => {

    const sizes = {
        lg: 'toggle-lg',
        md: 'toggle-md',
        sm: 'toggle-sm',
        xs: 'toggle-xs',
    }
    const colors = {
        primary: 'toggle-primary',
        secondary: 'toggle-secondary',
        accent: 'toggle-accent',
        info: 'toggle-info',
        success: 'toggle-success',
        warning: 'toggle-warning',
        error: 'toggle-error',
    }

    const classes = twMerge(
        'toggle',
        size && sizes[size],
        color && colors[color],
        className,
    )

    return (
        <input type="checkbox" {...props} ref={ref} data-theme={dataTheme} className={classes} />
    )
})

Toggle.displayName = "Toggle"