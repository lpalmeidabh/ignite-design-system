import { ComponentProps, useEffect, useState } from 'react'
import { X } from 'phosphor-react'
import {
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'
import { ToastProvider } from '@radix-ui/react-toast'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  message?: string
  isOpen: boolean
}

export function Toast({ isOpen, title, message, ...props }: ToastProps) {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [open])

  return (
    <ToastProvider swipeDirection="right">
      <ToastContainer open={open} onOpenChange={setOpen}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{message}</ToastDescription>
        <ToastAction altText="Fechar">
          <X />
        </ToastAction>
      </ToastContainer>
      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
