import type { Meta, StoryObj } from '@storybook/react-vite'

import { fn } from 'storybook/test'

import { Pin } from '@/components/ui/pin'

const meta = {
  title: 'ui/Pin',
  component: Pin,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    lat: { control: 'number' },
    lng: { control: 'number' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Pin>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Pin',
    color: '#ff0000',
  },
}

export const CustomColor: Story = {
  args: {
    label: 'Pin',
    color: '#00ff00',
  },
}

export const WithCoordinates: Story = {
  args: {
    label: 'Pin',
    lat: 35.6595,
    lng: 139.7005,
    color: '#0000ff',
  },
}
