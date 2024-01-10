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
  const classes = twMerge(
    'loading',
    size === 'lg' && 'loading-lg',
    size === 'md' && 'loading-md',
    size === 'sm' && 'loading-sm',
    size === 'xs' && 'loading-xs',
    variant === 'spinner' && 'loading-spinner',
    variant === 'dots' && 'loading-dots',
    variant === 'ring' && 'loading-ring',
    variant === 'ball' && 'loading-ball',
    variant === 'bars' && 'loading-bars',
    variant === 'infinity' && 'loading-infinity',
    color === 'neutral' && 'text-neutral',
    color === 'primary' && 'text-primary',
    color === 'secondary' && 'text-secondary',
    color === 'accent' && 'text-accent',
    color === 'info' && 'text-info',
    color === 'success' && 'text-success',
    color === 'warning' && 'text-warning',
    color === 'error' && 'text-error',
    color === 'ghost' && 'text-ghost',
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