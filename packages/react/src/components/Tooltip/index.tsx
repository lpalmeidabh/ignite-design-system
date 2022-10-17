import { TooltipProvider, TooltipPortal } from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { TooltipTrigger, TooltipContainer, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  message: string
  children: ReactNode
}

export function Tooltip({ children, message, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent {...props}>{message}</TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
