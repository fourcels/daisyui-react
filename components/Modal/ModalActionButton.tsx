import React from 'react'
import { Button, ButtonProps } from '../Button'
import { useModal } from './ModalContext'

export type ModalActionButtonProps = Omit<ButtonProps, 'onClick'> & {
  onClick?: (dialog: HTMLDialogElement) => void
}

export const ModalActionButton = React.forwardRef<HTMLButtonElement, ModalActionButtonProps>((
  {
    onClick,
    children,
    ...props
  },
  ref
) => {
  const dialogRef = useModal()

  return (
    <Button {...props} ref={ref} onClick={() => onClick?.(dialogRef.current!)}>
      {children}
    </Button>
  )
}
)

ModalActionButton.displayName = 'ModalActionButton'
