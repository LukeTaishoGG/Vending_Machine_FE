import { useState, useEffect } from 'react'
import type { ApiPin, MapPin } from '@/types/pin'
import { fetchAllMapPins } from '@/services/pinService'
import { convertApiPinsToMapPins } from '@/components/Map/Service/convertApiPin'

export const useMapPins = () => {
  const [apiPins, setApiPins] = useState<ApiPin[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchInitialPins = async () => {
      try {
        setIsLoading(true)
        const pins = await fetchAllMapPins()
        setApiPins(pins)
      } catch (error) {
        console.error('初期ピン取得エラー:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchInitialPins()
  }, [])

  const convertedPins: MapPin[] = convertApiPinsToMapPins(apiPins)

  return {
    apiPins,
    convertedPins,
    isLoading,
    setApiPins,
  }
}
