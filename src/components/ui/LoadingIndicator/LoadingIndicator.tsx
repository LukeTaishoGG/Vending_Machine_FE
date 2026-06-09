type LoadingIndicatorProps = {
  message?: string
}

export const LoadingIndicator = ({ message = 'ピンを読み込み中...' }: LoadingIndicatorProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'white',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      }}
    >
      {message}
    </div>
  )
}
