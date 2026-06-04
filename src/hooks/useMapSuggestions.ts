import { useState, useEffect, useRef } from 'react'
import type { MapPin } from '../dummyPin/MapPin'

export const useMapSuggestions = (search: string) => {
  const [suggestPins, setSuggestPins] = useState<MapPin[]>([])
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

  // サジェスト呼び出し
  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current)
    if (!search) {
      setSuggestPins([])
      return
    }
    debounceTimeout.current = setTimeout(async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/map_pins/search?query=${encodeURIComponent(search)}`)
        const pins = await res.json()
        setSuggestPins(pins.map((pin: any) => ({
          id: pin.id,
          lat: parseFloat(pin.latitude),
          lng: parseFloat(pin.longitude),
          address: pin.address,
          machine_name: pin.machine_name
        })))
      } catch (e) {
        setSuggestPins([])
      }
    }, 300)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return {
    suggestPins
  }
}