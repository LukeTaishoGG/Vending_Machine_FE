'use client'

import { useRouter } from 'next/navigation'
import { useUser } from '@/Contexts/UserContext'
import styles from './index.module.css'
import { AddIcon } from '@chakra-ui/icons'

export const AddPinButton = () => {
  const router = useRouter()
  const { user } = useUser()

  return (
    <button
      className={styles.addPinButton}
      onClick={() => {
        if (!user) {
          alert('ピン追加にはログインが必要です')
          router.push('/login')
        } else {
          router.push('/add-pin')
        }
      }}
    >
      <p className={styles.addPinButtonText}>ピン追加</p>
      <AddIcon fontSize="1.25rem" color="rgb(218, 40, 40)" />
    </button>
  )
}
