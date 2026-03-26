// App.jsx
import { useState } from 'react'
import './App.css'

const SETUP = 2500

function PrisLinje({ label, value }) {
  return (
    <div className="pris-linje">
      <span className="pris-label">{label}</span>
      <span className="pris-value">{value}</span>
    </div>
  )
}

function Prisberegner() {
  const [antal, setAntal] = useState(50)

  const rate = antal <= 200 ? 50 : 30
  const urlOmkostning = antal * rate
  const total = SETUP + urlOmkostning

  return (
    <div className="prisberegner-container">
      <div className="icon-wrapper">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4444cc" strokeWidth="2">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="12" y2="14" />
        </svg>
      </div>

      <h2>Beregn din pris</h2>
      <p>Indtast antal URLs og se hvad det koster — helt gennemsigtigt</p>

      <div className="prisberegner-box">
        <div className="input-row">
          <span>Antal URLs med schema markup</span>
          <input
            type="number"
            min="1"
            max="500"
            value={antal}
            onChange={e =>
              setAntal(Math.min(500, Math.max(1, parseInt(e.target.value) || 1)))
            }
          />
        </div>

        <input
          type="range"
          min="1"
          max="500"
          step="1"
          value={antal}
          onChange={e => setAntal(parseInt(e.target.value))}
        />

        <div className="range-labels">
          <span>1 URL</span>
          <span>200 URLs — 50 DKK/stk</span>
          <span>201+ URLs — 30 DKK/stk</span>
        </div>

        <hr />

        <PrisLinje label="Opsætning (engangsbetaling)" value="2.500 DKK" />
        <PrisLinje label={`${antal} URLs × ${rate} DKK`} value={`${urlOmkostning.toLocaleString('da-DK')} DKK`} />
        
        <hr />

        <div className="total-row">
          <span>Total</span>
          <span>{total.toLocaleString('da-DK')} DKK</span>
        </div>
        <div className="tax-note">Ekskl. moms</div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Prisberegner />
    </div>
  )
}

export default App