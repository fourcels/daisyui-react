import React, { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'
import { ComponentBaseProps } from '../types'

export type CardTitleProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps & {
    tag?: ElementType
  }

export const CardTitle = React.forwardRef<HTMLElement, CardTitleProps>(
  ({ className, tag = 'div', ...props }, ref) => {
    const Tag = tag

    return (
      <Tag {...props} className={twMerge('card-title', className)} ref={ref} />
    )
  }
)

CardTitle.displayName = 'CardTitle'