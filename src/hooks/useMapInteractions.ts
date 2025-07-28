import { useState, useCallback } from 'react'
import type { MapPin } from '../dummyPin/MapPin'

export const useMapInteractions = () => {
  const [selectedPinId, setSelectedPinId] = useState<number | null>(null)

  const handleMarkerClick = useCallback((pin: MapPin) => {
    setSelectedPinId(pin.id)
  }, [])

  const handleSuggestClick = useCallback((pin: MapPin, mapRef: React.MutableRefObject<any>) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat: pin.lat, lng: pin.lng })
    }
    setSelectedPinId(pin.id)
  }, [])

  const clearSelectedPin = useCallback(() => {
    setSelectedPinId(null)
  }, [])

  return {
    selectedPinId,
    handleMarkerClick,
    handleSuggestClick,
    clearSelectedPin
  }
}