import type { Libraries } from '@react-google-maps/api'
import { GOOGLE_MAPS_MAP_ID } from '@/config/env'

export const GOOGLE_MAP_LIBRARIES: Libraries = ['marker']

export const defaultGoogleMapOptions: google.maps.MapOptions = {
  mapId: GOOGLE_MAPS_MAP_ID,
  zoomControl: true,
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false,
  scaleControl: false,
  panControl: false,
  rotateControl: false,
  clickableIcons: false,
}
