import { useState } from 'react'

const SETUP = 2500

function PrisLinje({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
      <span style={{ color: '#333' }}>{label}</span>
      <span style={{ color: '#333', fontWeight: '500' }}>{value}</span>
    </div>
  )
}

function Prisberegner() {
  const [antal, setAntal] = useState(50)

  const rate = antal <= 200 ? 50 : 30
  const urlOmkostning = antal * rate
  const total = SETUP + urlOmkostning

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', padding: '40px 20px' }}>
      <div style={{ background: 'transparent', borderRadius: '12px', padding: '30px 40px', maxWidth: '700px', width: '100%', textAlign: 'center' }}>
        <div style={{ backgroundColor: '#f0f0ff', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', margin: '0 auto 20px' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4444cc" strokeWidth="2">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="8" y1="10" x2="16" y2="10" />
            <line x1="8" y1="14" x2="12" y2="14" />
          </svg>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px', color: '#111', fontFamily: "'Inter', sans-serif" }}>Beregn din pris</h2>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px', fontFamily: "'Inter', sans-serif" }}>Indtast antal URLs og se hvad det koster — helt gennemsigtigt</p>

        <div style={{ backgroundColor: '#fefefe', borderRadius: '12px', padding: '20px', textAlign: 'left', boxShadow: 'inset 0 0 0 1px #eaeaea' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '14px', color: '#333' }}>Antal URLs med schema markup</span>
            <input
              type="number"
              min="1"
              max="500"
              value={antal}
              onChange={e => setAntal(Math.min(500, Math.max(1, parseInt(e.target.value) || 1)))}
              style={{ width: '80px', padding: '6px 10px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '14px' }}
            />
          </div>

          <input
            type="range"
            min="1"
            max="500"
            step="1"
            value={antal}
            onChange={e => setAntal(parseInt(e.target.value))}
            style={{ width: '100%', margin: '12px 0' }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#999', marginBottom: '16px' }}>
            <span>1 URL</span>
            <span>200 URLs — 50 DKK/stk</span>
            <span>201+ URLs — 30 DKK/stk</span>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '16px 0' }} />

          <PrisLinje label="Opsætning (engangsbetaling)" value="2.500 DKK" />
          <PrisLinje label={`${antal} URLs × ${rate} DKK`} value={`${urlOmkostning.toLocaleString('da-DK')} DKK`} />

          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: '600', color: '#2d2d30', marginTop: '12px' }}>
            <span>Total</span>
            <span>{total.toLocaleString('da-DK')} DKK</span>
          </div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '4px', textAlign: 'right' }}>Ekskl. moms</div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return <Prisberegner />
}

export default App