import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { ComponentBaseProps } from '../types'

export type MenuDropdownProps = React.HTMLAttributes<HTMLSpanElement> &
  ComponentBaseProps & {
    label: ReactNode
    open?: boolean
  }

export const MenuDropdown = React.forwardRef<HTMLSpanElement, MenuDropdownProps>(
  ({ className, label, open, children, ...props }, ref) => {
    const classes = twMerge(
      'menu-dropdown-toggle',
      open && 'menu-dropdown-show',
      className,
    )

    return (
      <>
        <span {...props} className={classes} ref={ref}>
          {label}
        </span>
        <ul className={twMerge('menu-dropdown', open && 'menu-dropdown-show')}>
          {children}
        </ul>
      </>
    )
  }
)
