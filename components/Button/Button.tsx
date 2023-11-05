import { ElementType, ReactNode, forwardRef } from 'react'
import { ComponentShape, ComponentSize, ComponentColor, ComponentBaseProps } from '../types'
import { twMerge } from 'tailwind-merge'
import { Loading } from '../Loading'

export type ButtonProps<
    T extends ElementType = 'button'
> = React.HTMLAttributes<HTMLButtonElement>
    & ComponentBaseProps
    & {
        shape?: ComponentShape
        size?: ComponentSize
        variant?: 'outline' | 'link'
        color?: ComponentColor
        glass?: boolean
        wide?: boolean
        fullWidth?: boolean
        responsive?: boolean
        animation?: boolean
        loading?: boolean
        active?: boolean
        startIcon?: ReactNode
        endIcon?: ReactNode
        disabled?: boolean
        tag?: T
    }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
    {
        children,
        shape,
        size,
        variant,
        color,
        glass,
        startIcon,
        endIcon,
        wide,
        fullWidth,
        responsive,
        animation = true,
        loading,
        active,
        disabled,
        dataTheme,
        className,
        style,
        tag: Tag = 'button',
        ...props
    },
    ref
) => {
    const classes = twMerge(
        'btn',
        size === 'lg' && 'btn-lg',
        size === 'md' && 'btn-md',
        size === 'sm' && 'btn-sm',
        size === 'xs' && 'btn-xs',
        shape === 'circle' && 'btn-circle',
        shape === 'square' && 'btn-square',
        variant === 'outline' && 'btn-outline',
        variant === 'link' && 'btn-link',
        color === 'neutral' && 'btn-neutral',
        color === 'primary' && 'btn-primary',
        color === 'secondary' && 'btn-secondary',
        color === 'accent' && 'btn-accent',
        color === 'info' && 'btn-info',
        color === 'success' && 'btn-success',
        color === 'warning' && 'btn-warning',
        color === 'error' && 'btn-error',
        color === 'ghost' && 'btn-ghost',
        glass && 'glass',
        wide && 'btn-wide',
        fullWidth && 'btn-block',
        responsive && 'btn-xs sm:btn-sm md:btn-md lg:btn-lg',
        !animation && 'no-animation',
        active && 'btn-active',
        disabled && 'btn-disabled',
        className,
    )
    return (
        <Tag
            {...props}
            ref={ref}
            data-theme={dataTheme}
            className={classes}
            style={style}
            disabled={disabled}
        >
            {loading && <Loading size={size} />}
            {startIcon && !loading && startIcon}
            {children}
            {endIcon}
        </Tag>
    )
})

Button.displayName = 'Button'