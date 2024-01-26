import { ElementType, ReactNode, forwardRef } from 'react'
import { ComponentShape, ComponentSize, ComponentColor, ComponentBaseProps } from '../types'
import { twMerge } from 'tailwind-merge'
import { Loading } from '../Loading'


//  https://developer.mozilla.org/en-US/docs/Glossary/Void_element
const VoidElementList: ElementType[] = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'keygen',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]

export type ButtonProps<
  T extends ElementType = 'button'
> = React.ButtonHTMLAttributes<HTMLButtonElement>
  & ComponentBaseProps
  & {
    shape?: ComponentShape
    size?: ComponentSize
    variant?: 'outline' | 'link'
    color?: ComponentColor
    glass?: boolean
    wide?: boolean
    block?: boolean
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
    block,
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
  const sizes = {
    lg: 'btn-lg',
    md: 'btn-md',
    sm: 'btn-sm',
    xs: 'btn-xs',
  }
  const shapes = {
    circle: 'btn-circle',
    square: 'btn-square',
  }
  const variants = {
    outline: 'btn-outline',
    link: 'btn-link',
  }
  const colors = {
    neutral: 'btn-neutral',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    info: 'btn-info',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
    ghost: 'btn-ghost',
  }

  const classes = twMerge(
    'btn',
    size && sizes[size],
    shape && shapes[shape],
    variant && variants[variant],
    color && colors[color],
    glass && 'glass',
    wide && 'btn-wide',
    block && 'btn-block',
    responsive && 'btn-xs sm:btn-sm md:btn-md lg:btn-lg',
    !animation && 'no-animation',
    active && 'btn-active',
    disabled && 'btn-disabled',
    className,
  )
  if (VoidElementList.includes(Tag)) {
    return (
      <Tag
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
        style={style}
        disabled={disabled}
      />
    )
  } else {
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
  }
})

Button.displayName = 'Button'