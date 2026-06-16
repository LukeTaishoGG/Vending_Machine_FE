'use client'

import { Flex, Box } from '@chakra-ui/react'
import { HeaderLogo } from '@/components/ui/Headers/HeaderLogo'
import { AddPinButton } from '@/components/ui/Headers/AddPinButton'
import SearchBar from '@/components/ui/SearchBar'
import HeaderUser from '@/components/ui/Headers/HeaderUser'
import { useSearch } from '@/Contexts/SearchContext'

export default function Header() {
  const { search, setSearch } = useSearch()

  return (
    <Box className="header">
      <HeaderLogo />
      <Box className="UserPage">
        <Flex justifyContent="center" alignItems="center">
          <AddPinButton />
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
  )
}
