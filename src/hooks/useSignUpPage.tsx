import { useState } from 'react'
import { signUp } from '../services/authService'
import type { SignUpFormData } from '../types/auth'

export const useSignUp = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    userId: '',
    email: '',
    password: '',
  })
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')

    try {
      const result = await signUp({
        user_id: formData.userId,
        email: formData.email,
        password: formData.password,
      })

      setMessage(result.success ? result.message! : result.error!)
    } catch (error) {
      console.error('サインアップエラー:', error)
      setMessage('予期しないエラーが発生しました')
    }
  }

  const setUserId = (value: string) => setFormData((prev) => ({ ...prev, userId: value }))
  const setEmail = (value: string) => setFormData((prev) => ({ ...prev, email: value }))
  const setPassword = (value: string) => setFormData((prev) => ({ ...prev, password: value }))

  return {
    userId: formData.userId,
    setUserId,
    email: formData.email,
    setEmail,
    password: formData.password,
    setPassword,
    message,
    handleSubmit,
  }
}
