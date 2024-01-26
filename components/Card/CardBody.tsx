import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ComponentBaseProps } from '../types'

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentBaseProps

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => (
    <div {...props} className={twMerge('card-body', className)} ref={ref} />
  )
)

CardBody.displayName = 'CardBody'