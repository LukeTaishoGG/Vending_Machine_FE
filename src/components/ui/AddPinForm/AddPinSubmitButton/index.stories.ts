import type { Meta, StoryObj } from '@storybook/react-vite'
import { AddPinButton } from '@/components/ui/AddPinForm/AddPinSubmitButton'

const meta = {
  title: 'UI/AddPinButton',
  component: AddPinButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submit-clicked' },
    onCancel: { action: 'cancel-clicked' },
  },
} satisfies Meta<typeof AddPinButton>

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
