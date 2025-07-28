const API_BASE_URL = 'http://localhost:3001'

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
    const response = await fetch(`${API_BASE_URL}/api/vending_machines/by_pin/${pinId}`)
    
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