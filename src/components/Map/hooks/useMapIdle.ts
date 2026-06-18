import { useCallback, type MutableRefObject } from 'react'
import { useDebounce } from '@/features/debounce/debounce'
import { fetchPinsInBounds } from '@/services/pinService'
import { getMapBounds } from '@/components/Map/Service/mapUtils'
import type { ApiPin } from '@/types/pin'

export const useMapIdle = (
  onPinsReceived: (pins: ApiPin[]) => void,
  mapRef: MutableRefObject<google.maps.Map | null>,
) => {
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

  return { handleIdle }
}
