import { useState, useEffect } from 'react'
import type { MapPin } from '../dummyPin/MapPin'

// APIから取得したピンの型定義
type ApiPin = {
  id: number
  latitude: string
  longitude: string
  address: string
  machine_name?: string
}

export const useMapPins = () => {
  const [apiPins, setApiPins] = useState<ApiPin[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // 初期ピンの取得
  useEffect(() => {
    const fetchInitialPins = async () => {
      try {
        setIsLoading(true)
        console.log('初期ピンを取得中...')
        const response = await fetch('http://localhost:3001/api/map_pins')
        const pins = await response.json()
        console.log('取得したピン:', pins)
        setApiPins(pins)
      } catch (error) {
        console.error('初期ピン取得エラー:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchInitialPins()
  }, [])

  // APIピンをMapPin型に変換
  const convertedPins: MapPin[] = apiPins.map(pin => ({
    id: pin.id,
    lat: parseFloat(pin.latitude),
    lng: parseFloat(pin.longitude),
    address: pin.address,
    machine_name: pin.machine_name
  }))

  return {
    apiPins,
    convertedPins,
    isLoading,
    setApiPins
  }
} 