import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@lpatestorg/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus obcaecati distinctio ipsa. Sapiente suscipit iusto reprehenderit velit magni! Autem dolore beatae optio! Nobis explicabo exercitationem fuga beatae porro similique reiciendis?',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
