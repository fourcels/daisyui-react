import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps,
    ComponentColor,
    ComponentSize,
} from '../types'

import { ReactNode, forwardRef } from 'react'


export type CheckboxProps = Omit<
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

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((
    {
        label,
        labelAlt,
        labelClassName,
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
        <label className={twMerge('label gap-4', labelClassName)}>
            {label && <span className="label-text">{label}</span>}
            <input type="checkbox" {...props} ref={ref} data-theme={dataTheme} className={classes} />
            {labelAlt && <span className="label-text">{labelAlt}</span>}
        </label>
    )
})

Checkbox.displayName = "Checkbox"