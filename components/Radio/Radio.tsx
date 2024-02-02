import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps,
    ComponentColor,
    ComponentSize,
} from '../types'

import { ReactNode, forwardRef } from 'react'


export type RadioProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'color'
>
    & ComponentBaseProps
    & {
        size?: ComponentSize
        color?: Exclude<ComponentColor, 'neutral' | 'ghost'>
        label?: ReactNode
        labelAlt?: ReactNode
        labelClassName?: string
    }

export const Radio = forwardRef<HTMLInputElement, RadioProps>((
    {
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
        lg: 'radio-lg',
        md: 'radio-md',
        sm: 'radio-sm',
        xs: 'radio-xs',
    }
    const colors = {
        primary: 'radio-primary',
        secondary: 'radio-secondary',
        accent: 'radio-accent',
        info: 'radio-info',
        success: 'radio-success',
        warning: 'radio-warning',
        error: 'radio-error',
    }

    const classes = twMerge(
        'radio',
        size && sizes[size],
        color && colors[color],
        className,
    )

    return (
        <label className={twMerge('label gap-4', labelClassName)}>
            {label && <span className="label-text">{label}</span>}
            <input type="radio" {...props} ref={ref} data-theme={dataTheme} className={classes} />
            {labelAlt && <span className="label-text">{labelAlt}</span>}
        </label>
    )
})

Radio.displayName = "Radio"