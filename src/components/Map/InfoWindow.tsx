// 詳細画面を表示するコンポーネント

import type { MapPin } from './MapPin'

type InfoWindowProps = {
  pin: MapPin
}

const InfoWindow = ({ pin }: InfoWindowProps) => {
  return (
    <div style={{ color: '#000' }}>
      <h1>{pin.title}</h1>
      <iframe
        width="250"
        height="150"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps?q=&layer=c&cbll=${pin.lat},${pin.lng}&cbp=11,0,0,0,0&output=svembed`}
      ></iframe>
      <p>作成日: {pin.id}</p>
      <p>緯度: {pin.lat}</p>
      <p>経度: {pin.lng}</p>
    </div>
  )
}

export default InfoWindow
