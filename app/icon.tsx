import { ImageResponse } from 'next/og'

// Favicon — "A" escuro vazado sobre quadrado âmbar (paleta da marca).
// Gerado como PNG no build (compatível com output: 'export').
export const size = { width: 256, height: 256 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%' }}>
        <svg width="256" height="256" viewBox="0 0 256 256">
          <rect width="256" height="256" rx="56" fill="#c97c15" />
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
