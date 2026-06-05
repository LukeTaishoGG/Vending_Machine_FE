import type { SignUpRequest, SignUpResponse, LoginRequest, LoginResponse } from '@/types/auth'
import { API_URL } from '@/services/config'

// サインアップAPI
export const signUp = async (signUpData: SignUpRequest): Promise<SignUpResponse> => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signUpData)
    })

    const data = await response.json()
    if (response.ok) {
      return { success: true, message: '登録成功' }
    } else {
      return { success: false, error: data.error || '登録失敗' }
    }
  } catch (error) {
    console.error('サインアップAPIエラー:', error)
    return { success: false, error: '通信エラー' }
  }
}

// ログインAPI
export const login = async (loginData: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData)
    })

    const data = await response.json()

    if (response.ok) {
      return { success: true, message: 'ログイン成功', token: data.token, user: data.user }
    } else {
      return { success: false, error: data.error || 'ログイン失敗' }
    }
  } catch (error) {
    console.error('ログインAPIエラー:', error)
    return { success: false, error: '通信エラー' }
  }
}