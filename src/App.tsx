import './App.css'
import MyGoogleMap from './components/Map/MyGoogleMap'
import { ChakraProvider, Box, Flex, Text } from '@chakra-ui/react'
import HeaderUser from './components/User/HeaderUser'

function App() {
  return (
    <ChakraProvider>
      <Flex direction="column" h="100vh">
        <Box className="header">
          <Box className="header-title-box">
            <Text className="header-title" fontSize="xl" fontWeight="bold">
              Deep 自販機 Map
            </Text>
          </Box>
          <Box className="UserPage">
            <HeaderUser />
          </Box>
        </Box>
        <Box flex="1">
          <MyGoogleMap />
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

export default App
