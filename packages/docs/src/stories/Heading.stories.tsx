import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@lpatestorg/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading with H1',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, o Heading sempre será um `h2`. Você pode alterar isso usando a propriedade `as`.',
      },
    },
  },
}
