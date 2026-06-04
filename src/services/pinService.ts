import type { ApiPin, MapBounds } from '../types/pin'
import { API_URL } from './config'

export const fetchAllMapPins = async (): Promise<ApiPin[]> => {
  const response = await fetch(`${API_URL}/map_pins`)
  if (!response.ok) {
    throw new Error('ピン取得に失敗しました')
  }
  return response.json()
}

export const searchMapPins = async (query: string): Promise<ApiPin[]> => {
  const response = await fetch(
    `${API_URL}/map_pins/search?query=${encodeURIComponent(query)}`
  )
  if (!response.ok) {
    throw new Error('ピン検索に失敗しました')
  }
  return response.json()
}

export const fetchPinsInBounds = async (bounds: MapBounds): Promise<ApiPin[]> => {
  const response = await fetch(
    `${API_URL}/map_pins?ne_lat=${bounds.ne.lat}&ne_lng=${bounds.ne.lng}&sw_lat=${bounds.sw.lat}&sw_lng=${bounds.sw.lng}`
  )
  if (!response.ok) {
    throw new Error('ピン取得に失敗しました')
  }
  return response.json()
}
