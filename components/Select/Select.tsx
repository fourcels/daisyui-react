import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps,
    ComponentColor,
    ComponentSize,
    ListOrItem,
} from '../types'

import { Option, OptionProps } from './Option'
import { ReactElement, forwardRef } from 'react'


export type SelectProps = Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'size' | 'color'
> &
    ComponentBaseProps & {
        children: ListOrItem<ReactElement<OptionProps>>
        size?: ComponentSize
        color?: Exclude<ComponentColor, 'neutral'>
        bordered?: boolean
    }

const SelectInner = forwardRef<HTMLSelectElement, SelectProps>((
    {
        children,
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
        lg: 'select-lg',
        md: 'select-md',
        sm: 'select-sm',
        xs: 'select-xs',
    }
    const colors = {
        primary: 'select-primary',
        secondary: 'select-secondary',
        accent: 'select-accent',
        info: 'select-info',
        success: 'select-success',
        warning: 'select-warning',
        error: 'select-error',
        ghost: 'select-ghost',
    }

    const classes = twMerge(
        'select',
        size && sizes[size],
        color && colors[color],
        bordered && 'select-bordered',
        className,
    )

    return (
        <select {...props} ref={ref} data-theme={dataTheme} className={classes}>
            {children}
        </select>
    )
})

SelectInner.displayName = "Select"
export const Select = Object.assign(SelectInner, { Option })