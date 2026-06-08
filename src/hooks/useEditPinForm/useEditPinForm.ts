import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useUser } from '@/Contexts/UserContext'
import { 
  getPinDetail, 
  updatePin, 
  updateMachineDescription,
  updatePriceRange,
  updateManufacturer,
  type PinDetailData 
} from '@/services/pinDetailService'
import { geocodeAddress, reverseGeocode } from '@/hooks/geocoding/geocodingService'
import { useCurrentLocation } from '@/hooks/centerSpot/useCurrentLocation'
import type { AddPinFormData, Location } from '@/types/addPin'

export const useEditPinForm = () => {
  const router = useRouter()
  const params = useParams()
  const pinId = params?.pinId as string | undefined
  const { user } = useUser()
  const currentLocation = useCurrentLocation()

  const [pinData, setPinData] = useState<PinDetailData | null>(null)
  const [formData, setFormData] = useState<AddPinFormData>({
    machine_name: '',
    category: '飲料水',
    products: '',
    priceRange: '',
    description: '',
    manufacturer: '',
    address: '',
    lat: 0,
    lng: 0,
  })
  const [search, setSearch] = useState('')
  const [mapCenter, setMapCenter] = useState<Location>(currentLocation)
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [isLoadingAddress, setIsLoadingAddress] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // ピンデータの取得と初期化
  useEffect(() => {
    const fetchPinData = async () => {
      if (!pinId) return

      // デバッグ用ログ
      console.log('pinId from useParams:', pinId)
      console.log('pinId type:', typeof pinId)

      // pinIdから:1を除去して数値に変換
      const cleanPinId = pinId.replace(':1', '')
      const numericPinId = parseInt(cleanPinId)
      
      console.log('cleanPinId:', cleanPinId)
      console.log('numericPinId:', numericPinId)

      try {
        setIsLoading(true)
        const results = await getPinDetail(numericPinId)

        if (results.length > 0) {
          const data = results[0]
          // APIレスポンスの型を確認
          console.log('APIレスポンス:', data)
          console.log('latitude type:', typeof data.latitude, 'value:', data.latitude)
          console.log('longitude type:', typeof data.longitude, 'value:', data.longitude)

          // 権限チェック
          if (user?.id !== data.user_id) {
            alert('このピンを編集する権限がありません')
            router.push('/')
            return
          }

          setPinData(data)

          // フォームデータを初期化
          setFormData({
            machine_name: data.machine_name || '',
            category: data.category_name || '飲料水',
            products: data.product_name || '',
            priceRange: data.price_range || '',
            description: data.description || '',
            manufacturer: data.manufacturer_name || '',
            address: data.address || '',
            lat: parseFloat(String(data.latitude)),
            lng: parseFloat(String(data.longitude)),
          })

          // 地図の中心を設定
          const location = {
            lat: parseFloat(String(data.latitude)),
            lng: parseFloat(String(data.longitude)),
          }
          setMapCenter(location)
          setSelectedLocation(location)
        } else {
          alert('ピンデータが見つかりません')
          router.push('/')
        }
      } catch (error) {
        console.error('ピンデータ取得エラー:', error)
        alert('ピンデータの取得に失敗しました')
        router.push('/')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPinData()
  }, [pinId, user, router])

  // 検索でマップを動かすロジック
  const handleSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) return
    try {
      const location = await geocodeAddress(searchTerm)
      if (location) {
        setMapCenter(location)
        setSelectedLocation(location)
        setFormData((prev) => ({
          ...prev,
          ...location,
        }))
      }
    } catch (error) {
      console.error('住所検索エラー:', error)
    }
  }

  // クリックの緯度経度から住所を取得するロジック
  const handleMapClick = async (event: google.maps.MapMouseEvent) => {
    if (!event.latLng) return
    const lat = event.latLng.lat()
    const lng = event.latLng.lng()

    setSelectedLocation({ lat, lng })
    setFormData((prev) => ({
      ...prev,
      lat,
      lng,
    }))

    setIsLoadingAddress(true)
    try {
      const address = await reverseGeocode(lat, lng)
      if (address) {
        setFormData((prev) => ({
          ...prev,
          address,
        }))
      }
    } catch (error) {
      console.error('逆ジオコーディングエラー:', error)
    } finally {
      setIsLoadingAddress(false)
    }
  }

  // 更新処理
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!pinData) return

    // デバッグ用ログ
    console.log('pinData.pin_id:', pinData.pin_id)
    console.log('pinData.pin_id type:', typeof pinData.pin_id)

    setIsSubmitting(true)
    try {
      // map_pinsテーブルを更新
      await updatePin(pinData.pin_id, {
        machine_name: formData.machine_name,
        address: formData.address,
        latitude: formData.lat,
        longitude: formData.lng,
      })

      // machine_descriptionsテーブルを更新
      if (pinData.machine_description_id) {
        await updateMachineDescription(pinData.machine_description_id, formData.description)
      }

      // productsテーブルを更新
      if (pinData.vending_machine_id) {
        // 商品IDを取得する必要があるが、現在のAPIでは取得できない
        // 後で実装
      }

      // price_rangesテーブルを更新
      if (pinData.price_range_id) {
        await updatePriceRange(pinData.price_range_id, formData.priceRange)
      }

      // manufacturersテーブルを更新
      if (pinData.manufacturer_id) {
        await updateManufacturer(pinData.manufacturer_id, formData.manufacturer)
      }

      alert('更新完了')
      router.push('/')
    } catch (error) {
      console.error('更新エラー:', error)
      alert(error instanceof Error ? error.message : '更新失敗')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    router.push('/')
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return {
    pinData,
    formData,
    search,
    mapCenter,
    selectedLocation,
    isLoadingAddress,
    isLoading,
    isSubmitting,
    setSearch,
    handleSearch,
    handleMapClick,
    handleInputChange,
    handleUpdate,
    handleCancel,
  }
}
