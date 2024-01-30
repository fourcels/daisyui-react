import React, { ReactNode } from 'react'

import { ComponentBaseProps } from '../types'

export type MenuDetailsProps = React.DetailsHTMLAttributes<HTMLDetailsElement> &
  ComponentBaseProps & {
    label: ReactNode
    open?: boolean
    menuClassName?: string
  }

export const MenuDetails = React.forwardRef<HTMLDetailsElement, MenuDetailsProps>((
  {
    className,
    menuClassName,
    label,
    open,
    children,
    ...props
  },
  ref
) => {
  return (
    <details {...props} open={open} className={className} ref={ref}>
      <summary>{label}</summary>
      <ul className={menuClassName}>{children}</ul>
    </details>
  )
})

MenuDetails.displayName = 'MenuDetails'