import { useState } from 'react'
import { ChakraProvider, Box, Flex, Text } from '@chakra-ui/react'
import HeaderUser from '@/components/HeaderUser/HeaderUser'
import Search from '@/components/search/Search'
import './App.css'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import { UserProvider, useUser } from '@/Contexts/UserContext'
import { LoadScript } from '@react-google-maps/api'
import AppRouter from '@/router/AppRouter'
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_MAP_ID } from '@/config/env'
import { GOOGLE_MAP_LIBRARIES } from '@/config/googleMaps'

// ピン追加コンポーネント
const AddPinButton = () => {
  const { user } = useUser() //ログイン状態はここで取得
  const navigate = useNavigate()
  return (
    <button
      className="add-pin-button"
      onClick={() => {
        if (!user) {
          alert('ピン追加にはログインが必要です')
          navigate('/login')
        } else {
          navigate('/add-pin')
        }
      }}
      style={{
        cursor: 'pointer',
        color: 'blue',
        fontSize: '1.25rem',
        fontWeight: 'bold',
      }}
    >
      ピン追加 +
    </button>
  )
}

// メインアプリケーションコンポーネント
const MainApp = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  return (
    <Flex direction="column" h="100vh">
      <Box className="header">
        <Box className="header-title-box">
          <Text
            className="header-title"
            color="black"
            fontSize="xl"
            fontWeight="bold"
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          >
            Deep 自販機 Map
          </Text>
        </Box>
        <AddPinButton />
        <Box className="UserPage">
          <Flex justifyContent="center" alignItems="center">
            <Box className="search-bar" mx={4}>
              <Search
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="自販機を検索"
              />
            </Box>
            <HeaderUser />
          </Flex>
        </Box>
      </Box>
      <Box flex="1">
        <AppRouter search={search} />
      </Box>
    </Flex>
  )
}

function App() {
  if (!GOOGLE_MAPS_API_KEY) {
    throw new Error(
      'VITE_GOOGLE_MAPS_API_KEY ERROR',
    )
  }

  return (
    <LoadScript
      googleMapsApiKey={GOOGLE_MAPS_API_KEY}
      libraries={GOOGLE_MAP_LIBRARIES}
      mapIds={[GOOGLE_MAPS_MAP_ID]}
    >
      <UserProvider>
        <ChakraProvider>
          <BrowserRouter>
            <MainApp />
          </BrowserRouter>
        </ChakraProvider>
      </UserProvider>
    </LoadScript>
  )
}

export default App
