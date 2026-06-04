import type { MapBounds } from '../../../types/pin'

export const getMapBounds = (bounds: google.maps.LatLngBounds): MapBounds => {
  const ne = bounds.getNorthEast()
  const sw = bounds.getSouthWest()

  return {
    ne: { lat: ne.lat(), lng: ne.lng() },
    sw: { lat: sw.lat(), lng: sw.lng() },
  }
}
