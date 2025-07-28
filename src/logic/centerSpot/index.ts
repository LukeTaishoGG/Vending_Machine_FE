import { useEffect, useState } from 'react'

const SHIBUYA_LOCATION = {
  lat: 35.6595,
  lng: 139.7005,
}

export const useCurrentLocation = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number }>(SHIBUYA_LOCATION)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      },
      (err) => {
        console.error('位置情報の取得に失敗しました:', err)
        alert('位置情報取得できませんでした。')
        setLocation(SHIBUYA_LOCATION)
      }
    )
  }, [])

  return location
}