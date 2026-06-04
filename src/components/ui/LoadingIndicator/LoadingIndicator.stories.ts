import type { Meta, StoryObj } from '@storybook/react-vite'
import { LoadingIndicator } from './LoadingIndicator'

const meta = {
  title: 'UI/LoadingIndicator',
  component: LoadingIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingIndicator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const CustomMessage: Story = {
  args: {
    message: 'データを読み込み中...',
  },
}

export const ShortMessage: Story = {
  args: {
    message: '読み込み中',
  },
}