import React from 'react'
import { twMerge } from 'tailwind-merge'

import { ComponentBaseProps } from '../types'

export type MenuItemProps = React.LiHTMLAttributes<HTMLLIElement> &
  ComponentBaseProps & {
    disabled?: boolean
  }

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  ({ className, disabled, ...props }, ref) => {
    const classes = twMerge(
      disabled && 'disabled',
      className
    )

    return <li role="menuitem" className={classes} {...props} ref={ref} />
  }
)
