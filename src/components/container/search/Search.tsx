import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

type SearchProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
}

const Search = ({ value, onChange, onKeyPress, placeholder = '検索' }: SearchProps) => (
  <InputGroup>
    <InputLeftElement pointerEvents="none">
      <SearchIcon color="gray.300" />
    </InputLeftElement>
    <Input
      type="text"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      variant="filled"
      size="md"
      color="black"
    />
  </InputGroup>
)

export default Search
