import { Box, List, ListItem, Text } from '@chakra-ui/react'
import type { MapPin } from '@/types/pin'

type SuggestListProps = {
  suggestions: MapPin[]
  onSuggestionClick: (pin: MapPin) => void
  isVisible: boolean
}

export const SuggestList = ({ suggestions, onSuggestionClick, isVisible }: SuggestListProps) => {
  if (!isVisible || suggestions.length === 0) {
    return null
  }

  return (
    <Box
      position="absolute"
      top="10px"
      left="50%"
      transform="translateX(-50%)"
      zIndex="popover"
      bg="white"
      w="400px"
      maxW="90vw"
      boxShadow="md"
      borderRadius="md"
      mt={2}
      maxH="250px"
      overflowY="auto"
    >
      <List>
        {suggestions.map((pin) => (
          <ListItem
            key={pin.id}
            px={4}
            py={2}
            borderBottom="1px solid #eee"
            _hover={{ bg: 'teal.50', cursor: 'pointer' }}
            onClick={() => onSuggestionClick(pin)}
          >
            <Text fontWeight="bold">{pin.machine_name || '名称未設定'}</Text>
            <Text fontSize="sm" color="gray.500">
              {pin.address}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
