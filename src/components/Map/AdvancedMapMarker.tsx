import { useEffect, useRef } from 'react'
import { useGoogleMap } from '@react-google-maps/api'

type AdvancedMapMarkerProps = {
  position: { lat: number; lng: number }
  onClick?: () => void
}

export const AdvancedMapMarker = ({ position, onClick }: AdvancedMapMarkerProps) => {
  const map = useGoogleMap()
  const onClickRef = useRef(onClick)
  onClickRef.current = onClick

  useEffect(() => {
    if (!map) return

    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position,
    })

    const listener = marker.addListener('gmp-click', () => {
      onClickRef.current?.()
    })

    return () => {
      google.maps.event.removeListener(listener)
      marker.map = null
    }
  }, [map, position.lat, position.lng])

  return null
}
