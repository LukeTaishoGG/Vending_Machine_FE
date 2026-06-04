import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../Contexts/UserContext'
import { login } from '../services/authService'
import type { LoginFormData } from '../types/auth'

export const useLogin = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<LoginFormData>({
    userIdOrEmail: '',
    password: ''
  })
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { setUser } = useUser()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')
    setIsLoading(true)

    try {
      const result = await login({
        user_id_or_email: formData.userIdOrEmail,
        password: formData.password
      })

      if (result.success) {
        setMessage('ログイン完了')
        setUser(result.user)
        navigate('/user')
      } else {
        setMessage(result.error!)
      }
    } catch (error) {
      console.error('ログインエラー:', error)
      setMessage('予期しないエラーが発生しました')
    } finally {
      setIsLoading(false)
    }
  }

  const setUserIdOrEmail = (value: string) => setFormData(prev => ({ ...prev, userIdOrEmail: value }))
  const setPassword = (value: string) => setFormData(prev => ({ ...prev, password: value }))

  return {
    userIdOrEmail: formData.userIdOrEmail,
    setUserIdOrEmail,
    password: formData.password,
    setPassword,
    message,
    isLoading,
    handleLogin
  }
} 