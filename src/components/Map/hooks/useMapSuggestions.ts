import { useState, useEffect, useRef } from 'react'
import type { MapPin } from '../../../types/pin'
import { searchMapPins } from '../../../services/pinService'
import { convertApiPinsToMapPins } from '../Service/convertApiPin'

export const useMapSuggestions = (search: string) => {
  const [suggestPins, setSuggestPins] = useState<MapPin[]>([])
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current)
    if (!search) {
      setSuggestPins([])
      return
    }
    debounceTimeout.current = setTimeout(async () => {
      try {
        const pins = await searchMapPins(search)
        setSuggestPins(convertApiPinsToMapPins(pins))
      } catch {
        setSuggestPins([])
      }
    }, 300)
    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current)
    }
  }, [search])

  return {
    suggestPins,
  }
}
