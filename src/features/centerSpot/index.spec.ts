import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useCurrentLocation } from '@/features/centerSpot/useCurrentLocation'

// モックの設定
const mockGeolocation = {
  getCurrentPosition: vi.fn(),
}

// グローバルオブジェクトのモック
Object.defineProperty(global.navigator, 'geolocation', {
  value: mockGeolocation,
  writable: true,
})

describe('useCurrentLocation', () => {
  beforeEach(() => {
    // 各テスト前にモックをリセット
    vi.clearAllMocks()
  })

  it('位置情報の取得に成功した場合、現在位置を返す', () => {
    const mockPosition = {
      coords: {
        latitude: 35.6595,
        longitude: 139.7005,
      },
    }

    // getCurrentPositionの成功コールバックを呼び出す
    mockGeolocation.getCurrentPosition.mockImplementation((success) => {
      success(mockPosition)
    })

    const { result } = renderHook(() => useCurrentLocation())

    expect(result.current).toEqual({
      lat: 35.6595,
      lng: 139.7005,
    })
  })
  // it('位置情報の取得に成功した場合、現在位置を返す', () => {
  //   const mockPosition = {
  //     coords: {
  //       latitude: 35.6595,
  //       longitude: 139.7005,
  //     },
  //   }

  //   // getCurrentPositionの成功コールバックを呼び出す
  //   mockGeolocation.getCurrentPosition.mockImplementation((success) => {
  //     success(mockPosition)
  //   })

  //   const { result } = renderHook(() => useCurrentLocation())

  //   expect(result.current).toEqual({
  //     lat: 35.6595,
  //     lng: 139.7005,
  //   })
  // })

  // it('位置情報の取得に失敗した場合、デフォルト位置（渋谷）を返す', () => {
  //   const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  //   const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

  //   // getCurrentPositionのエラーコールバックを呼び出す
  //   mockGeolocation.getCurrentPosition.mockImplementation((success, error) => {
  //     error(new Error('位置情報の取得に失敗'))
  //   })

  //   const { result } = renderHook(() => useCurrentLocation())

  //   expect(result.current).toEqual({
  //     lat: 35.6595,
  //     lng: 139.7005,
  //   })

  //   expect(consoleSpy).toHaveBeenCalledWith('位置情報の取得に失敗しました:', expect.any(Error))
  //   expect(alertSpy).toHaveBeenCalledWith('位置情報の取得に失敗しました。')

  //   // スパイを復元
  //   consoleSpy.mockRestore()
  //   alertSpy.mockRestore()
  // })

  // it('初期状態ではデフォルト位置（渋谷）を返す', () => {
  //   const { result } = renderHook(() => useCurrentLocation())

  //   expect(result.current).toEqual({
  //     lat: 35.6595,
  //     lng: 139.7005,
  //   })
  // })
})
