import { Avatar, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'

const HeaderUser = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="User menu"
        icon={
          <Avatar
            name="Taro Yamada"
            src="https://kotonohaworks.com/free-icons/wp-content/uploads/kkrn_icon_user_14.png"
            size="sm"
          />
        }
        variant="ghost"
      />
      <MenuList className="user-meenu-list">
        <MenuItem sx={{ color: 'blue' }}>プロフィール</MenuItem>
        <MenuItem sx={{ color: 'red' }}>ログアウト</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default HeaderUser
