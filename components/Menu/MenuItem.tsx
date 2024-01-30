import React from 'react'
import { twMerge } from 'tailwind-merge'

import { ComponentBaseProps } from '../types'

export type MenuItemProps = React.LiHTMLAttributes<HTMLLIElement> &
  ComponentBaseProps & {
    disabled?: boolean,
    active?: boolean,
  }

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>((
  {
    className,
    disabled,
    active,
    ...props
  },
  ref
) => {
  const classes = twMerge(
    active && 'active',
    disabled && 'disabled',
    className
  )

  return <li role="menuitem" className={classes} {...props} ref={ref} />
})

MenuItem.displayName = 'MenuItem'