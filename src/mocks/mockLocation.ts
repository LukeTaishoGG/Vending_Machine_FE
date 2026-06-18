import type { MapPin } from '@/types/pin'

export const SHIBUYA_LOCATION = {
  lat: 35.6595,
  lng: 139.7005,
}

export const MOCK_MAP_PINS: MapPin[] = [
  { id: 1, lat: SHIBUYA_LOCATION.lat, lng: SHIBUYA_LOCATION.lng, address: 'PINの取得が失敗' },
]
