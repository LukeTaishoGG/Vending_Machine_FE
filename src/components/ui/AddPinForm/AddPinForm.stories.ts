import type { Meta, StoryObj } from '@storybook/react-vite'
import { AddPinForm } from './AddPinForm'

const meta = {
  title: 'UI/AddPinForm',
  component: AddPinForm,
  parameters: {
    layout: 'padded', // より実際のアプリに近いレイアウト
  },
  tags: ['autodocs'],
  argTypes: {
    onInputChange: { action: 'input-changed' },
  },
} satisfies Meta<typeof AddPinForm>

export default meta
type Story = StoryObj<typeof meta>

const mockFormData = {
  machine_name: '',
  category: '飲料水',
  products: '',
  priceRange: '',
  description: '',
  manufacturer: '',
  address: '',
}

export const Default: Story = {
  args: {
    formData: mockFormData,
    isLoadingAddress: false,
    onInputChange: () => {},
  },
}

export const WithData: Story = {
  args: {
    formData: {
      ...mockFormData,
      machine_name: '渋谷自販機',
      products: 'コーラ、水、お茶',
      priceRange: '150円~200円',
      description: '飲料',
      manufacturer: 'コカ・コーラ',
      address: '東京都渋谷区渋谷1-1-1',
    },
    isLoadingAddress: false,
    onInputChange: () => {},
  },
}

export const RealData: Story = {
  args: {
    formData: {
      machine_name: '自販機',
      category: '飲料水',
      products: 'コーラ、水、お茶、ジュース',
      priceRange: '120円~180円',
      description: '飲料自販機',
      manufacturer: '日本コカ・コーラ株式会社',
      address: '東京都世田谷区学芸大学',
    },
    isLoadingAddress: false,
    onInputChange: () => {},
  },
}

export const WithMapData: Story = {
  args: {
    formData: {
      machine_name: '',
      category: '飲料水',
      products: '',
      priceRange: '',
      description: '',
      manufacturer: '',
      address: '駒澤大学',
    },
    isLoadingAddress: false,
    onInputChange: () => {},
  },
}