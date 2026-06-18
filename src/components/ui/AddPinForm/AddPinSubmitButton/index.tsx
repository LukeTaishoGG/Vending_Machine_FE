import { Button, HStack } from '@chakra-ui/react'

type AddPinButtonProps = {
  onSubmit: (e: React.FormEvent) => void
  onCancel: () => void
  isSubmitting?: boolean
  submitText?: string
  loadingText?: string
}

export const AddPinButton = ({
  onSubmit,
  onCancel,
  isSubmitting = false,
  submitText = 'ピンを追加',
  loadingText = '追加中...',
}: AddPinButtonProps) => {
  return (
    <HStack spacing={4}>
      <Button
        type="submit"
        colorScheme="blue"
        size="lg"
        onClick={onSubmit}
        isLoading={isSubmitting}
        loadingText={loadingText}
      >
        {submitText}
      </Button>
      <Button onClick={onCancel} variant="outline" size="lg" isDisabled={isSubmitting}>
        キャンセル
      </Button>
    </HStack>
  )
}
