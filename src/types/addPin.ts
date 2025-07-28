// フォームデータの型定義
export interface AddPinFormData {
  machine_name: string; // 旧name
  category: string;
  products: string;
  priceRange: string;
  description: string;
  manufacturer: string;
  address: string;
  lat: number;
  lng: number;
}

// 位置情報の型定義
export interface Location {
  lat: number;
  lng: number;
}

// APIレスポンスの型定義
export interface ApiResponse {
  id: number;
  message?: string;
}

// ピンデータの型定義
export interface PinData {
  latitude: number;
  longitude: number;
  address: string;
  machine_name: string;
}

// 自販機データの型定義
export interface VendingMachineData {
  pin_id: number;
  user_id: number;
  manufacturer_id: number;
  category_id: number;
  price_range_id: number;
  product_id: number;
  machine_description_id: number;
} 