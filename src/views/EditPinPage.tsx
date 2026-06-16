'use client'

import { Box, VStack, Text } from '@chakra-ui/react'
import SearchBar from '@/components/ui/SearchBar'
import { useEditPinForm } from '@/hooks/useEditPinForm/useEditPinForm'
import { AddPinForm } from '@/components/ui/AddPinPages/AddPinForm'
import { MapSelector } from '@/components/ui/MapUI/MapSelector/MapSelector'
import { AddPinButtons } from '@/components/ui/AddPinPages/AddPinButtons'

const EditPinPage = () => {
  const {
    formData,
    search,
    mapCenter,
    selectedLocation,
    isLoadingAddress,
    isLoading,
    isSubmitting,
    setSearch,
    handleSearch,
    handleMapClick,
    handleInputChange,
    handleUpdate,
    handleCancel,
  } = useEditPinForm()

  if (isLoading) {
    return (
      <Box p={6} maxW="1200px" mx="auto">
        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">
            読み込み中...
          </Text>
        </VStack>
      </Box>
    )
  }

  return (
    <Box p={6} maxW="1200px" mx="auto">
      <VStack spacing={6} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">
          自動販売機の情報を編集してください
        </Text>
        {/* 検索バー */}
        <Box>
          <Text mb={2} fontWeight="bold">
            場所を検索
          </Text>
          <SearchBar
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch(e.currentTarget.value)
              }
            }}
            placeholder="住所を検索してマップを移動（Enterキーで検索）"
          />
        </Box>
        {/* 地図選択 */}
        <MapSelector
          center={mapCenter}
          zoom={15}
          selectedLocation={selectedLocation}
          onMapClick={handleMapClick}
        />
        {/* フォーム */}
        <Box as="form" onSubmit={handleUpdate}>
          <AddPinForm
            formData={formData}
            isLoadingAddress={isLoadingAddress}
            onInputChange={handleInputChange}
          />
          <AddPinButtons
            onSubmit={handleUpdate}
            onCancel={handleCancel}
            isSubmitting={isSubmitting}
            submitText="更新"
            loadingText="更新中..."
          />
        </Box>
      </VStack>
    </Box>
  )
}

export default EditPinPage
