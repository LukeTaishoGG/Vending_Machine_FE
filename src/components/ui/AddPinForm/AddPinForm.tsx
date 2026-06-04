import { Input, Box, VStack, Text, Select } from '@chakra-ui/react'

type FormData = {
  machine_name: string
  category: string
  products: string
  priceRange: string
  description: string
  manufacturer: string
  address: string
  lat: number
  lng: number
}

type AddPinFormProps = {
  formData: FormData
  isLoadingAddress: boolean
  onInputChange: (field: keyof FormData, value: string) => void
}

export const AddPinForm = ({ formData, isLoadingAddress, onInputChange }: AddPinFormProps) => {
  return (
    <VStack spacing={4} align="stretch">
      <Text fontSize="xl" fontWeight="bold">
        自動販売機の情報
      </Text>
      <Box>
        <Text mb={2}>*名前 *</Text>
        <Input
          type="text"
          placeholder="自動販売機の名前"
          value={formData.machine_name}
          onChange={(e) => onInputChange('machine_name', e.target.value)}
          required
        />
      </Box>
      <Box>
        <Text mb={2}>カテゴリ</Text>
        <Select
          value={formData.category}
          onChange={(e) => onInputChange('category', e.target.value)}
        >
          <option value="飲料水">飲料水</option>
          <option value="タバコ">タバコ</option>
          <option value="お酒">お酒</option>
          <option value="食品">食品</option>
          <option value="その他">その他</option>
        </Select>
      </Box>
      <Box>
        <Text mb={2}>商品</Text>
        <Input
          type="text"
          placeholder="コーラ、水、お茶など 複数可"
          value={formData.products}
          onChange={(e) => onInputChange('products', e.target.value)}
        />
      </Box>
      <Box>
        <Text mb={2}>価格帯</Text>
        <Input
          type="text"
          placeholder="150円~200円"
          value={formData.priceRange}
          onChange={(e) => onInputChange('priceRange', e.target.value)}
        />
      </Box>
      <Box>
        <Text mb={2}>説明</Text>
        <Input
          type="text"
          placeholder="自動販売機の説明"
          value={formData.description}
          onChange={(e) => onInputChange('description', e.target.value)}
        />
      </Box>
      <Box>
        <Text mb={2}>*業者名 *</Text>
        <Input
          type="text"
          placeholder="業者名を入力してください"
          value={formData.manufacturer || ''}
          onChange={(e) => onInputChange('manufacturer', e.target.value)}
          required
        />
      </Box>
      <Text fontSize="xl" fontWeight="bold">
        設置されている場所
      </Text>
      <Box>
        <Text mb={2}>* 住所 *</Text>
        <Input
          type="text"
          placeholder={isLoadingAddress ? '住所を取得中...' : '住所'}
          value={formData.address}
          onChange={(e) => onInputChange('address', e.target.value)}
          required
          isDisabled={isLoadingAddress}
        />
        {isLoadingAddress && (
          <Text fontSize="sm" color="blue.500" mt={1}>
            住所を取得中...
          </Text>
        )}
      </Box>
      <Box>
        <Text mb={2}>緯度</Text>
        <Input
          type="text"
          value={
            formData.lat !== 0 || formData.lng !== 0 ? formData.lat.toFixed(6) : ''
          }
          isReadOnly
          placeholder="地図をクリックすると自動入力"
        />
      </Box>
      <Box>
        <Text mb={2}>経度</Text>
        <Input
          type="text"
          value={
            formData.lat !== 0 || formData.lng !== 0 ? formData.lng.toFixed(6) : ''
          }
          isReadOnly
          placeholder="地図をクリックすると自動入力"
        />
      </Box>
    </VStack>
  )
}