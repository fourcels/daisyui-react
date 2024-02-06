import { twMerge } from 'tailwind-merge'

import { ReactNode, forwardRef } from 'react'
import { Toggle, ToggleProps } from '../Toggle'
import { ThemeControllerButton, ThemeControllerButtonProps } from './ThemeControllerButton'
import { ThemeControllerCheckbox, ThemeControllerCheckboxProps } from './ThemeControllerCheckbox'
import { ThemeControllerSwap, ThemeControllerSwapProps } from './ThemeControllerSwap'
import { ThemeControllerRadio, ThemeControllerRadioProps } from './ThemeControllerRadio'
import { ThemeControllerRadioGroup, ThemeControllerRadioGroupProps } from './ThemeControllerRadioGroup'
import { ThemeControllerButtonGroup, ThemeControllerButtonGroupProps } from './ThemeControllerButtonGroup'
import { ThemeControllerDropdown, ThemeControllerDropdownProps } from './ThemeControllerDropdown'
import { Label } from '../Label'
import { LabelText } from '../Label/LabelText'

export type {
    ThemeControllerButtonProps, ThemeControllerCheckboxProps,
    ThemeControllerSwapProps, ThemeControllerRadioProps,
    ThemeControllerRadioGroupProps, ThemeControllerButtonGroupProps,
    ThemeControllerDropdownProps,
}

export type ThemeControllerProps =
    Omit<ToggleProps, 'label'>
    & {
        label?: [ReactNode, ReactNode]
    }


export const ThemeControllerInner = forwardRef<HTMLInputElement, ThemeControllerProps>((
    {
        label,
        className,
        ...props
    },
    ref
) => {

    const classes = twMerge(
        'theme-controller',
        className,
    )
    const toggle = (
        <Toggle ref={ref} {...props} className={classes} />
    )

    if (!label) {
        return toggle
    }

    return (
        <Label>
            <LabelText>{label[0]}</LabelText>
            {toggle}
            <LabelText>{label[1]}</LabelText>
        </Label>
    )
})

ThemeControllerInner.displayName = "ThemeController"

export const ThemeController = Object.assign(ThemeControllerInner, {
    Button: ThemeControllerButton,
    Checkbox: ThemeControllerCheckbox,
    Swap: ThemeControllerSwap,
    Radio: ThemeControllerRadio,
    RadioGroup: ThemeControllerRadioGroup,
    ButtonGroup: ThemeControllerButtonGroup,
    Dropdown: ThemeControllerDropdown,
})