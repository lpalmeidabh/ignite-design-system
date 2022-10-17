import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  width: '360px',
  height: '85px',
  position: 'fixed',
  bottom: 30,
  right: 20,

  zIndex: 1000,
  borderRadius: '4px',
  backgroundColor: '$gray800',
  border: '2px solid $gray400',
  padding: '$2 $4',
})

export const ToastContent = styled('div', {
  lineHeight: 1.6,
  fontFamily: '$default',
})
export const ToastTitle = styled('div', {
  color: '$white',
  fontSize: '$md',
  fontWeight: 'bold',
})

export const ToastMessage = styled('div', {
  color: '$gray200',
  fontSize: '$sm',
  flex: 1,
  display: 'flex',
})

export const ToastClose = styled('button', {
  position: 'absolute',
  top: 10,
  right: 10,
  border: 'none',
  backgroundColor: '$transparent',
  color: '$white',
  fontSize: '$md',
  cursor: 'pointer',

  svg: {
    width: '1rem',
    height: '1rem',
  },
})
