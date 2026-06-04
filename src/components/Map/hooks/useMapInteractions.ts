import { useState, useCallback, type MutableRefObject } from 'react'
import type { MapPin } from '../../../types/pin'

export const useMapInteractions = () => {
  const [selectedPinId, setSelectedPinId] = useState<number | null>(null)

  const handleMarkerClick = useCallback((pin: MapPin) => {
    setSelectedPinId(pin.id)
  }, [])

  const handleSuggestClick = useCallback(
    (pin: MapPin, mapRef: MutableRefObject<google.maps.Map | null>) => {
      if (mapRef.current) {
        mapRef.current.panTo({ lat: pin.lat, lng: pin.lng })
      }
      setSelectedPinId(pin.id)
    },
    []
  )

  const clearSelectedPin = useCallback(() => {
    setSelectedPinId(null)
  }, [])

  return {
    selectedPinId,
    handleMarkerClick,
    handleSuggestClick,
    clearSelectedPin,
  }
}
