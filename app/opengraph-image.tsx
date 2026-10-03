import { ImageResponse } from 'next/og'

export const alt = 'SYNTHI-AI Advisory — Make it real'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: 'linear-gradient(135deg, #081524 0%, #0070ad 100%)',
          color: '#ffffff',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>SYNTHI-AI Advisory</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, fontWeight: 300, letterSpacing: -4, lineHeight: 1 }}>Make it real.</div>
          <div style={{ fontSize: 30, marginTop: 24, color: '#bde9f7', maxWidth: 820 }}>
Africa’s partner for business and technology transformation, powered by AI.
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
