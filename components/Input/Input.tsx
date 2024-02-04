import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps,
    ComponentColor,
    ComponentSize,
} from '../types'

import { ReactNode, forwardRef } from 'react'


export type InputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'color'
>
    & ComponentBaseProps
    & {
        size?: ComponentSize
        color?: Exclude<ComponentColor, 'neutral'>
        bordered?: boolean
    }

export const Input = forwardRef<HTMLInputElement, InputProps>((
    {
        size,
        color,
        bordered = true,
        dataTheme,
        className,
        ...props
    },
    ref
) => {

    const sizes = {
        lg: 'input-lg',
        md: 'input-md',
        sm: 'input-sm',
        xs: 'input-xs',
    }
    const colors = {
        primary: 'input-primary',
        secondary: 'input-secondary',
        accent: 'input-accent',
        info: 'input-info',
        success: 'input-success',
        warning: 'input-warning',
        error: 'input-error',
        ghost: 'input-ghost'
    }

    const classes = twMerge(
        'input',
        size && sizes[size],
        color && colors[color],
        bordered && 'input-bordered',
        className,
    )

    return (
        <input {...props} ref={ref} data-theme={dataTheme} className={classes} />
    )
})

Input.displayName = "Input"