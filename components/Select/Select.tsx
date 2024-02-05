import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps,
    ComponentColor,
    ComponentSize,
    ListOrItem,
} from '../types'

import { SelectOption, SelectOptionProps } from './SelectOption'
import React, { ReactElement, forwardRef } from 'react'
import { Button } from '../Button'

export type SelectItem = string | number | {
    label: string;
    value: string | number;
}

export type SelectProps = Omit<
    React.ComponentProps<'select'>,
    'size' | 'color' | 'onChange'
> &
    ComponentBaseProps & {
        children?: ListOrItem<ReactElement<SelectOptionProps>>
        size?: ComponentSize
        color?: Exclude<ComponentColor, 'neutral'>
        bordered?: boolean
        placeholder?: string
        items?: SelectItem[]
        onChange?: (value?: string) => void
        clearable?: boolean
    }

const SelectInner = forwardRef<HTMLSelectElement, SelectProps>((
    {
        clearable = true,
        onChange,
        defaultValue = "",
        placeholder = 'Select...',
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

    const selectRef = React.useRef<HTMLSelectElement>(null)
    React.useImperativeHandle(ref, () => selectRef.current!)
    const classes = twMerge(
        'select',
        size && sizes[size],
        color && colors[color],
        bordered && 'select-bordered',
        className,
    )

    const options = React.useMemo(() => {
        if (children) {
            return children
        }
        return items.map(item => {
            if (typeof item === 'string' || typeof item === 'number') {
                return <SelectOption key={item}>{item}</SelectOption>
            }
            const { label, value = label } = item
            return <SelectOption key={value} value={value}>{label}</SelectOption>
        })
    }, [children, items,])
    return (
        <div className='relative group'>
            {clearable && (
                <div className='group-hover:block hidden absolute top-1/2 right-2 -translate-y-1/2'>
                    <Button
                        onClick={() => {
                            const select = selectRef.current
                            if (select) {
                                select.value = ""
                                onChange?.(undefined)
                            }
                        }}
                        shape='circle'
                        size='xs'
                        color='neutral'
                    >✕</Button>
                </div>
            )}
            <select
                onChange={(e) => onChange?.(e.target.value)}
                defaultValue={defaultValue}
                {...props}
                ref={selectRef}
                data-theme={dataTheme}
                className={classes}>
                {placeholder && <SelectOption value="" disabled>{placeholder}</SelectOption>}
                {options}
            </select>
        </div>
    )
})

SelectInner.displayName = "Select"
export const Select = Object.assign(SelectInner, {
    Option: SelectOption
})