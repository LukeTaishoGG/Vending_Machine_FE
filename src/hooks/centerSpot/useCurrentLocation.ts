import { useEffect, useState } from 'react'
import { SHIBUYA_LOCATION } from '@/data/mockLocation'

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
