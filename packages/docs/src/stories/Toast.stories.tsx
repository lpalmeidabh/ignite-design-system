import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@lpatestorg/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: "You've got mail!",
    message: 'You have 3 new messages.',
  },
  // argTypes: {
  //   variant: {
  //     options: ['primary', 'secondary', 'tertiary'],
  //     control: { type: 'inline-radio' },
  //   },
  //   size: {
  //     options: ['sm', 'md'],
  //     control: { type: 'inline-radio' },
  //   },
  //   disabled: {
  //     control: { type: 'boolean' },
  //   },
  //   onClick: { action: 'clicked' },
  // },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
