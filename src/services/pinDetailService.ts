import { API_URL } from '@/services/config'

interface ApiUpdateResponse<T = unknown> {
  success: boolean
  message: string
  data: T
}

// PIN詳細情報の型定義
export interface PinDetailData {
  vending_machine_id: number
  pin_id: number
  latitude: number
  longitude: number
  address: string
  machine_name: string
  user_id: number
  manufacturer_id: number
  manufacturer_name: string
  category_id: number
  category_name: string
  price_range_id: number
  price_range: string
  machine_description_id: number
  description: string
  product_name: string
}

// PIN詳細情報を取得
export const getPinDetail = async (pinId: number): Promise<PinDetailData[]> => {
  try {
    const response = await fetch(`${API_URL}/vending_machines/by_pin/${pinId}`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('PIN詳細情報取得エラー:', error)
    throw error
  }
}

// map_pinsテーブルを更新
export const updatePin = async (
  pinId: number,
  pinData: {
    machine_name: string
    address: string
    latitude: number
    longitude: number
  },
): Promise<ApiUpdateResponse> => {
  try {
    const response = await fetch(`${API_URL}/pins/${pinId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pinData),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'ピン更新に失敗しました')
    }

    return response.json()
  } catch (error) {
    console.error('PIN更新エラー:', error)
    throw error
  }
}

// machine_descriptionsテーブルを更新
export const updateMachineDescription = async (
  machineDescriptionId: number,
  description: string,
): Promise<ApiUpdateResponse> => {
  try {
    const response = await fetch(`${API_URL}/machine_descriptions/${machineDescriptionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || '説明更新に失敗しました')
    }

    return response.json()
  } catch (error) {
    console.error('説明更新エラー:', error)
    throw error
  }
}

// productsテーブルを更新
export const updateProduct = async (
  productId: number,
  product_name: string,
): Promise<ApiUpdateResponse> => {
  try {
    const response = await fetch(`${API_URL}/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product_name }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || '商品更新に失敗しました')
    }

    return response.json()
  } catch (error) {
    console.error('商品更新エラー:', error)
    throw error
  }
}

// price_rangesテーブルを更新
export const updatePriceRange = async (
  priceRangeId: number,
  price_range: string,
): Promise<ApiUpdateResponse> => {
  try {
    const response = await fetch(`${API_URL}/price_ranges/${priceRangeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price_range }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || '価格帯更新に失敗しました')
    }

    return response.json()
  } catch (error) {
    console.error('価格帯更新エラー:', error)
    throw error
  }
}

// manufacturersテーブルを更新
export const updateManufacturer = async (
  manufacturerId: number,
  manufacturer_name: string,
): Promise<ApiUpdateResponse> => {
  try {
    const response = await fetch(`${API_URL}/manufacturers/${manufacturerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ manufacturer_name }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'メーカー更新に失敗しました')
    }

    return response.json()
  } catch (error) {
    console.error('メーカー更新エラー:', error)
    throw error
  }
}

// 自販機情報を更新
export const updateVendingMachine = async (
  machineId: number,
  machineData: {
    manufacturer_id: number
    category_id: number
    price_range_id: number
    product_id: number
    machine_description_id: number
  },
): Promise<{ message: string; machineId: number }> => {
  try {
    const response = await fetch(`${API_URL}/vending_machines/${machineId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(machineData),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || '自販機情報更新に失敗しました')
    }

    return response.json()
  } catch (error) {
    console.error('自販機情報更新エラー:', error)
    throw error
  }
}
