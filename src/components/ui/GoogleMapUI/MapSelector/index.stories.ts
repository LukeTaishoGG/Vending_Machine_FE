import type { Meta, StoryObj } from '@storybook/react-vite'
import { MapSelector } from '@/components/ui/GoogleMapUI/MapSelector'

const meta = {
  title: 'UI/MapSelector',
  component: MapSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onMapClick: { action: 'map-clicked' },
  },
} satisfies Meta<typeof MapSelector>

export default meta
type Story = StoryObj<typeof meta>

const defaultCenter = {
  lat: 35.6595,
  lng: 139.7005,
}

export const Default: Story = {
  args: {
    center: defaultCenter,
    zoom: 15,
    selectedLocation: null,
    onMapClick: () => {},
  },
}

export const WithSelectedLocation: Story = {
  args: {
    center: defaultCenter,
    zoom: 15,
    selectedLocation: {
      lat: 35.6595,
      lng: 139.7005,
    },
    onMapClick: () => {},
  },
}

export const DifferentLocation: Story = {
  args: {
    center: {
      lat: 35.6762,
      lng: 139.6503,
    },
    zoom: 15,
    selectedLocation: {
      lat: 35.6762,
      lng: 139.6503,
    },
    onMapClick: () => {},
  },
}
