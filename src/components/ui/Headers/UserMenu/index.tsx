import { Avatar, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import styles from './index.module.css'

type UserMenuProps = {
  isLoggedIn: boolean
  onLogout: () => void
  onSignup: () => void
  onLogin: () => void
}

const UserMenu = ({ isLoggedIn, onLogout, onSignup, onLogin }: UserMenuProps) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="User menu"
        icon={
          <Avatar
            name="ユーザー"
            src="https://kotonohaworks.com/free-icons/wp-content/uploads/kkrn_icon_user_14.png"
            size="sm"
          />
        }
        variant="ghost"
      />
      <MenuList className={styles.userMeenuList}>
        {!isLoggedIn ? (
          <>
            <MenuItem sx={{ color: 'blue' }} onClick={onSignup}>
              サインイン
            </MenuItem>
            <MenuItem sx={{ color: 'blue' }} onClick={onLogin}>
              ログイン
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem sx={{ color: 'blue' }}>プロフィール</MenuItem>
            <MenuItem sx={{ color: 'red' }} onClick={onLogout}>
              ログアウト
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  )
}

export default UserMenu
