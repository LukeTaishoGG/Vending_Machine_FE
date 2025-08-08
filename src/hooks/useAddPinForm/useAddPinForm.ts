import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddPin } from './useAddPin'
import { useUser } from '../../Contexts/UserContext'

export const useAddPinForm = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  const {
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
  } = useAddPin(user)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const result = await handleAddPin(e)
      if (result?.success) {
        navigate('/')
      }
    } catch (error) {
      console.error('ピン追加エラー:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const onCancel = () => {
    navigate('/')
  }

  return {
    formData,
    search,
    mapCenter,
    selectedLocation,
    isLoadingAddress,
    isSubmitting,
    setSearch,
    handleSearch,
    handleMapClick,
    handleInputChange,
    onSubmit,
    onCancel,
  }
}
