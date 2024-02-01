import { twMerge } from 'tailwind-merge'

import { forwardRef } from 'react'
import { ThemeControllerButton, ThemeControllerButtonProps } from './ThemeControllerButton'
import { Toggle, ToggleProps } from '../Toggle'

export type { ThemeControllerButtonProps }

export type ThemeControllerProps = ToggleProps


export const ThemeControllerInner = forwardRef<HTMLInputElement, ThemeControllerProps>((
    {
        className,
        ...props
    },
    ref
) => {

    const classes = twMerge(
        'theme-controller',
        className,
    )
    return (
        <Toggle ref={ref} {...props} className={classes} />
    )
})

ThemeControllerInner.displayName = "ThemeController"

export const ThemeController = Object.assign(ThemeControllerInner, {
    Button: ThemeControllerButton
})