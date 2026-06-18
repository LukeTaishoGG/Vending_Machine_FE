import { useRef, useCallback } from 'react'

// デバウンス機能付きの関数を作成するフック
//Map移動で繰り返しAPIを叩かないようにするために使用
export const useDebounce = <T extends (...args: unknown[]) => void>(callback: T, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay],
  )

  return debouncedCallback
}
