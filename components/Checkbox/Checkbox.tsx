import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps,
    ComponentColor,
    ComponentSize,
} from '../types'

import { forwardRef } from 'react'


export type CheckboxProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'color'
> &
    ComponentBaseProps & {
        size?: ComponentSize
        color?: Exclude<ComponentColor, 'neutral' | 'ghost'>
    }

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((
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
        lg: 'checkbox-lg',
        md: 'checkbox-md',
        sm: 'checkbox-sm',
        xs: 'checkbox-xs',
    }
    const colors = {
        primary: 'checkbox-primary',
        secondary: 'checkbox-secondary',
        accent: 'checkbox-accent',
        info: 'checkbox-info',
        success: 'checkbox-success',
        warning: 'checkbox-warning',
        error: 'checkbox-error',
    }

    const classes = twMerge(
        'checkbox',
        size && sizes[size],
        color && colors[color],
        className,
    )

    return (
        <input type="checkbox" {...props} ref={ref} data-theme={dataTheme} className={classes} />
    )
})

Checkbox.displayName = "Checkbox"