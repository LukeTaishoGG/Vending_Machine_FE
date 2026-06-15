export interface User {
  id: number
  user_id: string
  email: string
}


// サインアップフォームデータの型定義
export interface SignUpFormData {
  userId: string
  email: string
  password: string
}

// サインアップリクエストの型定義
export interface SignUpRequest {
  user_id: string
  email: string
  password: string
}

// サインアップレスポンスの型定義
export interface SignUpResponse {
  success?: boolean
  error?: string
  message?: string
}

// ログインフォームデータの型定義
export interface LoginFormData {
  userIdOrEmail: string
  password: string
}

// ログインリクエストの型定義
export interface LoginRequest {
  user_id_or_email: string
  password: string
}

// ログインレスポンスの型定義
export interface LoginResponse {
  success?: boolean
  error?: string
  message?: string
  user?: User
}
