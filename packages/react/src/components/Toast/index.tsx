import { ComponentProps } from 'react'

import {
  ToastClose,
  ToastContainer,
  ToastContent,
  ToastMessage,
  ToastTitle,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title?: string
  message?: string
}

export function Toast({ title, message, ...props }: ToastProps) {
  return (
    <ToastContainer {...props}>
      <ToastContent>
        <ToastClose>
          <X />
        </ToastClose>
        <ToastTitle>{title}</ToastTitle>
        <ToastMessage>{message}</ToastMessage>
      </ToastContent>
    </ToastContainer>
  )
}
