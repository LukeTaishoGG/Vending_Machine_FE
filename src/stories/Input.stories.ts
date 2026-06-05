import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/stories/Input'

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'テキストを入力',
    size: 'medium',
  },
}
