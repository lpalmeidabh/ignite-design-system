import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@lpatestorg/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: "You've got mail!",
    message: 'You have 3 new messages.',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
