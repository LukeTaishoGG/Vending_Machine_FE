import { GoogleMap } from '@react-google-maps/api'
import { AdvancedMapMarker } from '@/components/Map/AdvancedMapMarker'
import { defaultGoogleMapOptions } from '@config/googleMaps'
import type { MapPin } from '@/types/pin'

type MapDisplayProps = {
  center: { lat: number; lng: number }
  zoom: number
  pins: MapPin[]
  onMarkerClick: (pin: MapPin) => void
  onMapLoad?: (map: google.maps.Map) => void
  onMapIdle?: () => void
  mapRef?: React.MutableRefObject<google.maps.Map | null>
}

const containerStyle = {
  width: '100%',
  height: '100%',
}

export const MapDisplay = ({
  center,
  zoom,
  pins,
  onMarkerClick,
  onMapLoad,
  onMapIdle,
  mapRef,
}: MapDisplayProps) => {
  return (
    <GoogleMap
      onLoad={(map) => {
        if (mapRef) mapRef.current = map
        onMapLoad?.(map)
      }}
      onIdle={onMapIdle}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      options={defaultGoogleMapOptions}
    >
      {pins.map((pin) => (
        <AdvancedMapMarker
          key={pin.id}
          position={{ lat: pin.lat, lng: pin.lng }}
          onClick={() => onMarkerClick(pin)}
        />
      ))}
    </GoogleMap>
  )
}
