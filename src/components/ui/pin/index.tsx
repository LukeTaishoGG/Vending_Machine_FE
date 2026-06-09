export interface PinProps {
  /** Pinの位置情報 */
  lat?: number
  lng?: number
  /** Pinの表示名 */
  label?: string
  /** Pinの色 */
  color?: string
  /** クリックハンドラー */
  onClick?: () => void
}

/** 地図上のピンコンポーネント */
export const Pin = ({
  lat: _lat = 0,
  lng: _lng = 0,
  label = 'Pin',
  color = '#ff0000',
  onClick,
  ...props
}: PinProps) => {
  return (
    <div
      style={{
        width: '20px',
        height: '20px',
        backgroundColor: color,
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        color: 'white',
        fontWeight: 'bold',
      }}
      onClick={onClick}
      {...props}
    >
      {label}
    </div>
  )
}
