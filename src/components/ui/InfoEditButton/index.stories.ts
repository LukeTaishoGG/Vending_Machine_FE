import type { Meta, StoryObj } from '@storybook/react'
import { InfoEditButton } from '@/components/ui/InfoEditButton/index.stories'

const meta: Meta<typeof InfoEditButton> = {
  title: 'UI/InfoEditButton',
  component: InfoEditButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// 基本的な使用方法
export const Default: Story = {
  args: {
    onClick: () => console.log('編集ボタンがクリックされました'),
  },
}

// ボタンの見た目を確認するためのストーリー
export const WithCustomClick: Story = {
  args: {
    onClick: () => alert('編集ページに遷移'),
  },
}
