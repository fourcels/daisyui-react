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
        label?: string
    }

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>((
    {
        label,
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
        <label className='label gap-4'>
            <span className="label-text">{label}</span>
            <input type="checkbox" {...props} ref={ref} data-theme={dataTheme} className={classes} />
        </label>
    )
})

Toggle.displayName = "Toggle"