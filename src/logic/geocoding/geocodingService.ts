import type { Location } from '../../types/addPin'

// 住所から座標を取得
export const geocodeAddress = async (address: string): Promise<Location | null> => {
  if (!window.google || !window.google.maps) {
    throw new Error('Google Maps APIが読み込まれていません')
  }

  const geocoder = new window.google.maps.Geocoder()
  const result = await geocoder.geocode({ address })

  if (result.results.length > 0) {
    const location = result.results[0].geometry.location
    return {
      lat: location.lat(),
      lng: location.lng(),
    }
  }

  return null
}

// 座標から住所を取得
export const reverseGeocode = async (lat: number, lng: number): Promise<string | null> => {
  if (!window.google || !window.google.maps) {
    throw new Error('Google Maps APIが読み込まれていません')
  }

  const geocoder = new window.google.maps.Geocoder()
  const result = await geocoder.geocode({ location: { lat, lng } })

  if (result.results.length > 0) {
    return result.results[0].formatted_address
  }

  return null
}
