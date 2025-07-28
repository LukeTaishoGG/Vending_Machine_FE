import type { ApiPin, MapBounds } from '../types/pin'

// 境界内のピンを取得するAPI関数
export const fetchPinsInBounds = async (bounds: MapBounds): Promise<ApiPin[]> => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/map_pins?ne_lat=${bounds.ne.lat}&ne_lng=${bounds.ne.lng}&sw_lat=${bounds.sw.lat}&sw_lng=${bounds.sw.lng}`
    )
    const pins = await response.json()

    console.log('境界内のピン:', pins)
    return pins
  } catch (error) {
    console.error('ピン取得エラー:', error)
    throw error
  }
}