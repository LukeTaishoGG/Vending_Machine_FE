import { useState, useEffect } from 'react'
import { Spinner, Text, Box, Button } from '@chakra-ui/react'
import { getPinDetail, type PinDetailData } from '@/services/pinDetailService'
import { useUser } from '@/Contexts/UserContext'
import { useNavigate } from 'react-router-dom'

type InfoWindowContentProps = {
  pinId: number
}

const InfoWindowContent = ({ pinId }: InfoWindowContentProps) => {
  const [data, setData] = useState<PinDetailData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { user } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    getPinDetail(pinId)
      .then((results: PinDetailData[]) => {
        if (results.length > 0) {
          setData(results[0])
        } else {
          setError('詳細情報が見つかりません')
        }
      })
      .catch((err: Error) => {
        console.error('詳細情報取得エラー:', err)
        setError('詳細情報の取得に失敗しました')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [pinId])

  const canEdit = user && data && user.id === data.user_id

  const handleEdit = () => {
    if (data) {
      navigate(`/edit-pin/${data.pin_id}`)
    }
  }

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <Spinner size="lg" />
      </Box>
    )
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <Text color="red.500">{error}</Text>
      </Box>
    )
  }

  if (!data) {
    return null
  }

  return (
    <div style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>
        {data.machine_name || '自販機詳細'}
      </h3>

      <div style={{ marginBottom: '16px' }}>
        <iframe
          width="100%"
          height="150"
          style={{ border: 0, borderRadius: '8px' }}
          loading="lazy"
          allowFullScreen
          allow="accelerometer; gyroscope"
          src={`https://www.google.com/maps?q=&layer=c&cbll=${data.latitude},${data.longitude}&cbp=11,0,0,0,0&output=svembed`}
        />
      </div>
      <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
        <p>
          <strong>住所:</strong> {data.address}
        </p>
        <p>
          <strong>自販機ID:</strong> {data.vending_machine_id}
        </p>
        <p>
          <strong>緯度:</strong> {data.latitude}
        </p>
        <p>
          <strong>経度:</strong> {data.longitude}
        </p>
        <p>
          <strong>メーカー:</strong> {data.manufacturer_name || '未設定'}
        </p>
        <p>
          <strong>カテゴリ:</strong> {data.category_name || '未設定'}
        </p>
        <p>
          <strong>価格帯:</strong> {data.price_range || '未設定'}
        </p>
        <p>
          <strong>商品:</strong> {data.product_name || '未設定'}
        </p>
        {data.description && (
          <p>
            <strong>説明:</strong> {data.description}
          </p>
        )}
      </div>
      {canEdit && (
        <Box mb={3}>
          <Button colorScheme="blue" size="sm" onClick={handleEdit} width="100%">
            編集
          </Button>
        </Box>
      )}
    </div>
  )
}

export default InfoWindowContent
