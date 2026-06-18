import { useState, useCallback, useEffect } from 'react'
import { geocodeAddress, reverseGeocode } from '@/utils/geocoding/geocodingService'
import {
  createPin,
  createCategory,
  createManufacturer,
  createPriceRange,
  createProduct,
  createMachineDescription,
  createVendingMachine,
} from '@/services/addPinService'
import { validateUserId } from '@/hooks/validation/addPinValidation'
import type { AddPinFormData, Location } from '@/types/addPin'
import type { User } from '@/types/auth'
import { useCurrentLocation } from '@/features/centerSpot/useCurrentLocation'

interface UseAddPinReturn {
  formData: AddPinFormData
  search: string
  mapCenter: Location
  selectedLocation: Location | null
  isLoadingAddress: boolean
  setSearch: (value: string) => void
  handleSearch: (searchTerm: string) => Promise<void>
  handleMapClick: (event: google.maps.MapMouseEvent) => Promise<void>
  handleAddPin: (e: React.FormEvent) => Promise<{ success: boolean } | undefined>
  handleInputChange: (field: string, value: string) => void
}

export const useAddPin = (user: User | null): UseAddPinReturn => {
  const currentLocation = useCurrentLocation()
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

  // 検索でマップを動かすロジック
  const handleSearch = useCallback(async (searchTerm: string) => {
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
  }, [])

  // クリックの緯度経度から住所を取得するロジック
  const handleMapClick = useCallback(async (event: google.maps.MapMouseEvent) => {
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
  }, [])

  // currentLocationが変わったらmapCenterも更新
  useEffect(() => {
    setMapCenter(currentLocation)
  }, [currentLocation])

  // フォーム送信処理
  const handleAddPin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const userId = validateUserId(user)
      // 1. ピンデータを保存
      const pinResult = await createPin({
        latitude: formData.lat,
        longitude: formData.lng,
        address: formData.address,
        machine_name: formData.machine_name,
      })
      // 2. カテゴリを保存
      const categoryResult = await createCategory(formData.category)
      // 3. メーカーを保存
      const manufacturerResult = await createManufacturer(formData.manufacturer)
      // 4. 価格帯を保存
      const priceRangeResult = await createPriceRange(formData.priceRange)
      // 5. 商品を保存
      const productResult = await createProduct(formData.products)
      // 6. 自販機説明を保存
      const machineDescriptionResult = await createMachineDescription(formData.description)
      // 7. 自販機を保存
      await createVendingMachine({
        pin_id: pinResult.id,
        user_id: userId,
        manufacturer_id: manufacturerResult.id,
        category_id: categoryResult.id,
        price_range_id: priceRangeResult.id,
        product_id: productResult.id,
        machine_description_id: machineDescriptionResult.id,
      })
      alert('登録完了')
      return { success: true }
    } catch (error) {
      console.error('ピン追加エラー:', error)
      alert(error instanceof Error ? error.message : '登録失敗')
      return { success: false }
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return {
    formData,
    search,
    mapCenter,
    selectedLocation,
    isLoadingAddress,
    setSearch,
    handleSearch,
    handleMapClick,
    handleAddPin,
    handleInputChange,
  }
}
