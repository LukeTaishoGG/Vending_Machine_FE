import type { Meta, StoryObj } from '@storybook/react-vite'
import { AddPinButtons } from './AddPinButtons'

const meta = {
  title: 'UI/AddPinButtons',
  component: AddPinButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submit-clicked' },
    onCancel: { action: 'cancel-clicked' },
  },
} satisfies Meta<typeof AddPinButtons>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isSubmitting: false,
    onSubmit: () => {},
    onCancel: () => {},
  },
}

export const Submitting: Story = {
  args: {
    isSubmitting: true,
    onSubmit: () => {},
    onCancel: () => {},
  },
}

export const Disabled: Story = {
  args: {
    isSubmitting: false,
    onSubmit: () => {},
    onCancel: () => {},
  },
} 