import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps,
    ComponentColor,
    ComponentSize,
} from '../types'

import { ReactNode, forwardRef } from 'react'


export type ToggleProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'color'
> &
    ComponentBaseProps & {
        size?: ComponentSize
        color?: Exclude<ComponentColor, 'neutral' | 'ghost'>
        label?: ReactNode
        labelAlt?: ReactNode
        labelClassName?: string
    }

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>((
    {
        children,
        label,
        labelAlt,
        size,
        color,
        dataTheme,
        className,
        labelClassName,
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
        <label className={twMerge('label gap-4', labelClassName)}>
            {label && <span className="label-text">{label}</span>}
            <input type="checkbox" {...props} ref={ref} data-theme={dataTheme} className={classes} />
            {children}
            {labelAlt && <span className="label-text">{labelAlt}</span>}
        </label>
    )
})

Toggle.displayName = "Toggle"