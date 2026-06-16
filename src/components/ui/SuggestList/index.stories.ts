import type { Meta, StoryObj } from '@storybook/react-vite'
import { SuggestList } from '@/components/ui/SuggestList'
import type { MapPin } from '@/types/pin'

const meta = {
  title: 'UI/SuggestList',
  component: SuggestList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSuggestionClick: { action: 'suggestion-clicked' },
  },
} satisfies Meta<typeof SuggestList>

export default meta
type Story = StoryObj<typeof meta>

const mockSuggestions: MapPin[] = [
  {
    id: 1,
    lat: 35.6762,
    lng: 139.6503,
    address: '東京都渋谷区渋谷1-1-1',
    machine_name: '渋谷駅前自販機',
  },
  {
    id: 2,
    lat: 35.6762,
    lng: 139.6503,
    address: '東京都新宿区新宿3-1-1',
    machine_name: '新宿駅東口自販機',
  },
  {
    id: 3,
    lat: 35.6762,
    lng: 139.6503,
    address: '東京都港区六本木6-1-1',
    machine_name: '六本木ヒルズ自販機',
  },
]

export const Default: Story = {
  args: {
    suggestions: mockSuggestions,
    isVisible: true,
    onSuggestionClick: () => {},
  },
}

export const Empty: Story = {
  args: {
    suggestions: [],
    isVisible: true,
    onSuggestionClick: () => {},
  },
}

export const Hidden: Story = {
  args: {
    suggestions: mockSuggestions,
    isVisible: false,
    onSuggestionClick: () => {},
  },
}

export const SingleItem: Story = {
  args: {
    suggestions: [mockSuggestions[0]],
    isVisible: true,
    onSuggestionClick: () => {},
  },
}

export const LongList: Story = {
  args: {
    suggestions: [
      ...mockSuggestions,
      {
        id: 4,
        lat: 35.6762,
        lng: 139.6503,
        address: '東京都品川区品川1-1-1',
        machine_name: '品川駅自販機',
      },
      {
        id: 5,
        lat: 35.6762,
        lng: 139.6503,
        address: '東京都台東区浅草1-1-1',
        machine_name: '浅草寺前自販機',
      },
      {
        id: 6,
        lat: 35.6762,
        lng: 139.6503,
        address: '東京都墨田区押上1-1-1',
        machine_name: 'スカイツリー自販機',
      },
    ],
    isVisible: true,
    onSuggestionClick: () => {},
  },
}
