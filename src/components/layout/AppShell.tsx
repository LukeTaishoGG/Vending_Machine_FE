'use client'

import { useRouter } from 'next/navigation'
import { Box, Flex, Text } from '@chakra-ui/react'
import HeaderUser from '@/components/ui/Headers/HeaderUser'
import SearchBar from '@/components/ui/SearchBar'
import { SearchProvider, useSearch } from '@/Contexts/SearchContext'
import { useUser } from '@/Contexts/UserContext'

const AddPinButton = () => {
  const { user } = useUser()
  const router = useRouter()

  return (
    <button
      className="add-pin-button"
      onClick={() => {
        if (!user) {
          alert('ピン追加にはログインが必要です')
          router.push('/login')
        } else {
          router.push('/add-pin')
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

const AppShellContent = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const { search, setSearch } = useSearch()

  return (
    <Flex direction="column" w="100%" h="100vh">
      <Box className="header">
        <Box className="header-title-box">
          <Text
            className="header-title"
            color="black"
            fontSize="xl"
            fontWeight="bold"
            onClick={() => router.push('/')}
            style={{ cursor: 'pointer' }}
          >
            Deep 自販機 Map
          </Text>
        </Box>
        <AddPinButton />
        <Box className="UserPage">
          <Flex justifyContent="center" alignItems="center">
            <Box mx={4}>
              <SearchBar
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="自販機を検索"
              />
            </Box>
            <HeaderUser />
          </Flex>
        </Box>
      </Box>
      <Box flex="1" w="100%" minH={0}>
        {children}
      </Box>
    </Flex>
  )
}

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <SearchProvider>
      <AppShellContent>{children}</AppShellContent>
    </SearchProvider>
  )
}
