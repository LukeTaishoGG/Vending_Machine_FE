import { Button, HStack } from '@chakra-ui/react'

type AddPinButtonsProps = {
  onSubmit: (e: React.FormEvent) => void
  onCancel: () => void
  isSubmitting?: boolean
}

export const AddPinButtons = ({ onSubmit, onCancel, isSubmitting = false }: AddPinButtonsProps) => {
  return (
    <HStack spacing={4}>
      <Button
        type="submit"
        colorScheme="blue"
        size="lg"
        onClick={onSubmit}
        isLoading={isSubmitting}
        loadingText="追加中..."
      >
        ピンを追加
      </Button>
      <Button
        onClick={onCancel}
        variant="outline"
        size="lg"
        isDisabled={isSubmitting}
      >
        キャンセル
      </Button>
    </HStack>
  )
}