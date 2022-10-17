import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Tooltip.Root, {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  padding: '$1 $2',
  fontSize: '$sm',
  lineHeight: 1,
  fontFamily: '$default',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
  pointerEvents: 'none',
  zIndex: 1000,
})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: 4,
  padding: '10px 15px',
  fontSize: 15,
  lineHeight: 1,
  fontFamily: '$default',
  color: '$white',
  backgroundColor: '$gray500',
})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  display: 'inline-block',
  zIndex: 1000,
})
