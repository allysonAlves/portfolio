import { ImageResponse } from 'next/og'

// Apple touch icon (iOS "adicionar à tela inicial"). Sem cantos arredondados —
// o iOS aplica a máscara automaticamente. Fundo opaco como o iOS exige.
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%' }}>
        <svg width="180" height="180" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="#c97c15" />
          <path
            d="M56 210 L128 52 L200 210"
            fill="none"
            stroke="#0d0b08"
            strokeWidth="30"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <line x1="86" y1="156" x2="170" y2="156" stroke="#0d0b08" strokeWidth="30" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size },
  )
}
