import { useRef, useCallback } from 'react'
import { useDebounce } from '../logic/debounce/debounce'
import { fetchPinsInBounds } from '../services/pinService'
import { getMapBounds } from '../logic/map/mapUtils'
import type { ApiPin } from '../types/pin'

// 地図のアイドル状態を管理するフック
export const useMapIdle = (onPinsReceived: (pins: ApiPin[]) => void) => {
  const mapRef = useRef<google.maps.Map | null>(null)

  // ピン取得処理をデバウンス
  const debouncedFetchPins = useDebounce(async () => {
    const bounds = mapRef.current?.getBounds()
    if (!bounds) return

    try {
      const mapBounds = getMapBounds(bounds)
      const pins = await fetchPinsInBounds(mapBounds)
      onPinsReceived(pins)
    } catch (error) {
      console.error('ピン取得に失敗しました:', error)
    }
  }, 500)

  const handleIdle = useCallback(() => {
    debouncedFetchPins()
  }, [debouncedFetchPins])

  return { handleIdle, mapRef }
}