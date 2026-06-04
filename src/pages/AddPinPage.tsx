import { Box, VStack, Text } from '@chakra-ui/react'
import Search from '../components/search/Search'
import { useAddPinForm } from '../hooks/useAddPinForm/useAddPinForm'
import { AddPinForm } from '../components/ui/AddPinForm/AddPinForm'
import { MapSelector } from '../components/ui/MapSelector/MapSelector'
import { AddPinButtons } from '../components/ui/AddPinButtons/AddPinButtons'

const AddPinPage = () => {
  const {
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
  } = useAddPinForm()

  return (
    <Box p={6} maxW="1200px" mx="auto">
      <VStack spacing={6} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">
          追加する自動販売機の情報を入力してください
        </Text>
        {/* 検索バー */}
        <Box>
          <Text mb={2} fontWeight="bold">
            場所を検索
          </Text>
          <Search
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
        <Box as="form" onSubmit={onSubmit}>
          <AddPinForm
            formData={formData}
            isLoadingAddress={isLoadingAddress}
            onInputChange={handleInputChange}
          />
          <AddPinButtons onSubmit={onSubmit} onCancel={onCancel} isSubmitting={isSubmitting} />
        </Box>
      </VStack>
    </Box>
  )
}

export default AddPinPage
