import { GoogleMap, Marker } from '@react-google-maps/api'
import type { MapPin } from '../../../dummyPin/MapPin'

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
  width: '100vw',
  height: '100vh',
}

export const MapDisplay = ({
  center,
  zoom,
  pins,
  onMarkerClick,
  onMapLoad,
  onMapIdle,
  mapRef
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
      options={{
        zoomControl: true,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        scaleControl: false,
        panControl: false,
        rotateControl: false,
        clickableIcons: false,
      }}
    >
      {pins.map((pin) => (
        <Marker
          key={pin.id}
          position={{ lat: pin.lat, lng: pin.lng }}
          onClick={() => onMarkerClick(pin)}
        />
      ))}
    </GoogleMap>
  )
} 