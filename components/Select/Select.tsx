import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps,
    ComponentColor,
    ComponentSize,
    ListOrItem,
} from '../types'

import { Option, OptionProps } from './Option'
import React, { ReactElement, forwardRef } from 'react'

export type SelectOptionProps = OptionProps
export type SelectItem = string | number | {
    label: string;
    value?: string | number;
}

export type SelectPlaceholder = boolean | string | {
    content?: string
    disabled?: boolean
}

export type SelectProps = Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'size' | 'color'
> &
    ComponentBaseProps & {
        children?: ListOrItem<ReactElement<OptionProps>>
        size?: ComponentSize
        color?: Exclude<ComponentColor, 'neutral'>
        bordered?: boolean
        placeholder?: SelectPlaceholder
        items?: SelectItem[]
    }

const SelectInner = forwardRef<HTMLSelectElement, SelectProps>((
    {
        value,
        defaultValue = value ? undefined : "",
        placeholder,
        items = [],
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

    const placeholderOption = React.useMemo(() => {
        if (!placeholder) {
            return
        }
        let optionLabel = 'None'
        let optionDisabled = true
        if (typeof placeholder === 'string') {
            optionLabel = placeholder
        } else if (typeof placeholder === 'boolean') {
            /* empty */
        } else {
            const { content = optionLabel, disabled = true } = placeholder
            optionLabel = content
            optionDisabled = disabled
        }


        return <Option value="" disabled={optionDisabled}>{optionLabel}</Option>
    }, [placeholder])

    const options = React.useMemo(() => {
        if (children) {
            return children
        }
        return items.map(item => {
            if (typeof item === 'string' || typeof item === 'number') {
                return <Option key={item}>{item}</Option>
            }
            const { label, value = label } = item
            return <Option key={value} value={value}>{label}</Option>
        })
    }, [children, items])
    return (
        <select defaultValue={defaultValue} value={value} {...props} ref={ref} data-theme={dataTheme} className={classes}>
            {placeholderOption}
            {options}
        </select>
    )
})

SelectInner.displayName = "Select"
export const Select = Object.assign(SelectInner, { Option })