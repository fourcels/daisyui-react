import { forwardRef } from 'react'
import { ComponentBaseProps, ComponentColor, ComponentSize } from '../types'
import { twMerge } from 'tailwind-merge'

export type LoadingProps =
  React.HTMLAttributes<HTMLSpanElement>
  & ComponentBaseProps
  & {
    size?: ComponentSize
    color?: ComponentColor
    variant?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity'
  }


export const Loading = forwardRef<HTMLSpanElement, LoadingProps>((
  {
    size,
    variant = 'spinner',
    color,
    dataTheme,
    className,
    style,
    ...props
  },
  ref
) => {

  const sizes = {
    lg: 'loading-lg',
    md: 'loading-md',
    sm: 'loading-sm',
    xs: 'loading-xs',
  }

  const variants = {
    spinner: 'loading-outline',
    dots: 'loading-link',
    ring: 'loading-link',
    ball: 'loading-link',
    bars: 'loading-link',
    infinity: 'loading-link',
  }
  const colors = {
    neutral: 'loading-neutral',
    primary: 'loading-primary',
    secondary: 'loading-secondary',
    accent: 'loading-accent',
    info: 'loading-info',
    success: 'loading-success',
    warning: 'loading-warning',
    error: 'loading-error',
    ghost: 'loading-ghost',
  }

  const classes = twMerge(
    'loading',
    size && sizes[size],
    variant && variants[variant],
    color && colors[color],
    className,
  )
  return (
    <span
      {...props}
      ref={ref}
      data-theme={dataTheme}
      className={classes}
      style={style}
    />
  )
})

Loading.displayName = 'Loading'