import { twMerge } from 'tailwind-merge'

import { forwardRef } from 'react'
import { ComponentBaseProps } from '../types'
import { ThemeControllerGroupItem } from './ThemeControllerRadioGroup'
import { ThemeControllerButton, ThemeControllerButtonProps } from './ThemeControllerButton'

export type ThemeControllerButtonGroupProps =
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
    & ComponentBaseProps
    & {
        direction?: 'vertical' | 'horizontal'
        buttonProps?: ThemeControllerButtonProps,
        items?: ThemeControllerGroupItem[]
        name: string
        value?: ThemeControllerButtonProps['value']
        onChange?: (value: ThemeControllerButtonProps['value']) => void
    }


export const ThemeControllerButtonGroup = forwardRef<HTMLDivElement, ThemeControllerButtonGroupProps>((
    {
        value,
        onChange,
        items,
        name,
        direction,
        dataTheme,
        className,
        buttonProps,
        ...props
    },
    ref
) => {
    const classes = twMerge(
        'join',
        direction === 'vertical' && 'join-vertical',
        className,
    )
    return (
        <div className={classes} ref={ref} data-theme={dataTheme} {...props}>
            {items?.map((item) => {
                if (typeof item === 'string') {
                    item = {
                        label: item,
                        value: item,
                    }
                }
                return <ThemeControllerButton
                    checked={value === item.value}
                    onChange={(e) => onChange?.(e.target.value)}
                    name={name}
                    key={item.value}
                    aria-label={item.label}
                    value={item.value}
                    {...buttonProps}
                />
            })}
        </div>
    )
})

ThemeControllerButtonGroup.displayName = "ThemeControllerButtonGroup"