import { twMerge } from 'tailwind-merge'

import { forwardRef } from 'react'
import { Button, ButtonProps } from '../Button'


export type ThemeControllerButtonProps = ButtonProps<'input'>


export const ThemeControllerButton = forwardRef<HTMLInputElement, ThemeControllerButtonProps>((
    {
        className,
        ...props
    },
    ref
) => {
    const classes = twMerge(
        'theme-controller join-item',
        className,
    )
    return (
        <Button as="input" type="radio" {...props} ref={ref} className={classes} />
    )
})

ThemeControllerButton.displayName = "ThemeControllerButton"