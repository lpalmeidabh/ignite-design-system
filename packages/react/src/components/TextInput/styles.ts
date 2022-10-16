import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray500',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray500',

  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(:input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  backgroundColor: '$transparent',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 'none',
  },

  '&::placeholder': {
    color: '$gray400',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})
