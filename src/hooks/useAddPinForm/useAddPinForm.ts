import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAddPin } from '@/hooks/useAddPin/useAddPin'
import { useUser } from '@/Contexts/UserContext'

export const useAddPinForm = () => {
  const router = useRouter()
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
        router.push('/')
      }
    } catch (error) {
      console.error('ピン追加エラー:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const onCancel = () => {
    router.push('/')
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
