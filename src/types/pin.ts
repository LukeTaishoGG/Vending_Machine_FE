// APIから取得したピンの型定義
export type ApiPin = {
  id: number
  latitude: string
  longitude: string
  address: string
}

// 地図の境界を表す型
export type MapBounds = {
  ne: { lat: number; lng: number }
  sw: { lat: number; lng: number }
}