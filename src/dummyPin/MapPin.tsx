// ピンの型定義
export type MapPin = {
  id: number
  lat: number
  lng: number
  address: string
  machine_name?: string
}

export const mapPins: MapPin[] = [
  { id: 1, lat: 35.6595, lng: 139.7005, address: 'PINの取得が失敗' },
]
