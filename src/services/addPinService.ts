import type {
  PinData,
  VendingMachineData,
  ApiResponse
} from '@/types/addPin'

import { API_URL } from '@/services/config'

// ピンデータを保存
export const createPin = async (pinData: PinData): Promise<ApiResponse> => {
  const response = await fetch(`${API_URL}/map_pins`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pinData)
  })
  
  if (!response.ok) {
    throw new Error('ピンデータの保存に失敗しました')
  }
  
  return response.json()
}

// カテゴリを保存
export const createCategory = async (name: string): Promise<ApiResponse> => {
  const response = await fetch(`${API_URL}/categories`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  })
  
  if (!response.ok) {
    throw new Error('カテゴリデータの保存に失敗しました')
  }
  
  return response.json()
}

// メーカーを保存
export const createManufacturer = async (name: string): Promise<ApiResponse> => {
  const response = await fetch(`${API_URL}/manufacturers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  })
  
  if (!response.ok) {
    throw new Error('メーカーデータの保存に失敗しました')
  }
  
  return response.json()
}

// 価格帯を保存
export const createPriceRange = async (priceRange: string): Promise<ApiResponse> => {
  const response = await fetch(`${API_URL}/price_ranges`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ price_range: priceRange })
  })
  
  if (!response.ok) {
    throw new Error('価格帯データの保存に失敗しました')
  }
  
  return response.json()
}

// 商品を保存
export const createProduct = async (name: string): Promise<ApiResponse> => {
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  })
  
  if (!response.ok) {
    throw new Error('商品データの保存に失敗しました')
  }
  
  return response.json()
}

// 自販機説明を保存
export const createMachineDescription = async (description: string): Promise<ApiResponse> => {
  const response = await fetch(`${API_URL}/machine_descriptions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description })
  })
  
  if (!response.ok) {
    throw new Error('自販機説明データの保存に失敗しました')
  }
  
  return response.json()
}

// 自販機を保存
export const createVendingMachine = async (machineData: VendingMachineData): Promise<ApiResponse> => {
  const response = await fetch(`${API_URL}/vending_machines`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(machineData)
  })
  
  if (!response.ok) {
    throw new Error('自販機データの保存に失敗しました')
  }
  
  return response.json()
} 