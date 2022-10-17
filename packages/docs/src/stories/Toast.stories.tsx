import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@lpatestorg/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {
    title: "You've got mail!",
    message: 'You have 3 new messages.',
    isOpen: false,
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
