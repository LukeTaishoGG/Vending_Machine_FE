import { Button } from '@chakra-ui/react'

type InfoEditButtonProps = {
  onClick: () => void
}

export const InfoEditButton = ({ onClick }: InfoEditButtonProps) => {
  return <Button onClick={onClick}>編集</Button>
}
