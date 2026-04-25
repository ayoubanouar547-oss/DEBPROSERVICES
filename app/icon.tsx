import { ImageResponse } from 'next/og';

// export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: '#000814',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          borderRadius: '8px',
          border: '2px solid #1565c0',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
        }}
      >
        <span style={{ color: '#1565c0' }}>D</span>
        <span style={{ color: '#ef4444', marginLeft: '-2px' }}>P</span>
      </div>
    ),
    { ...size }
  );
}
