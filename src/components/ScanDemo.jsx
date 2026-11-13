import { useEffect, useRef, useState } from 'react';
import Portrait from './Portrait.jsx';
import { DEMO_PRODUCTS } from '../config.js';

const SCAN_MS = 3600;
const HOLD_MS = 2600;

// Left: the shopper's photo with lookOn's scanner sweeping over it.
// Right: the preview, revealed when the scan finishes. Loops through products; visitors can pick one.
export default function ScanDemo() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('scan'); // 'scan' -> 'done'
  const [step, setStep] = useState(0);
  const [run, setRun] = useState(0);
  const [auto, setAuto] = useState(true);
  const timers = useRef([]);
  const product = DEMO_PRODUCTS[index];
  const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    const scan = reduced ? 600 : SCAN_MS;
    setPhase('scan');
    setStep(0);
    timers.current = [
      setTimeout(() => setStep(1), scan * 0.33),
      setTimeout(() => setStep(2), scan * 0.66),
      setTimeout(() => setPhase('done'), scan),
      auto ? setTimeout(() => { setIndex((i) => (i + 1) % DEMO_PRODUCTS.length); setRun((r) => r + 1); }, scan + HOLD_MS) : null,
    ].filter(Boolean);
    return () => timers.current.forEach(clearTimeout);
  }, [run]); // eslint-disable-line react-hooks/exhaustive-deps

  const choose = (i) => { setAuto(false); setIndex(i); setRun((r) => r + 1); };
  const steps = ['Scanning the photo', 'Finding the right fit', `Placing the ${product.kind.toLowerCase()}`];

  return (
    <div className="demo">
      <div className="demo-frames">
        <figure className={`frame before ${phase === 'scan' ? 'is-scanning' : ''}`}>
          <Portrait title="Shopper photo" />
          <div className="scanner" aria-hidden="true">
            <span className="dots" /><span className="beam" />
            <span className="corner c1" /><span className="corner c2" /><span className="corner c3" /><span className="corner c4" />
          </div>
          <figcaption>Shopper's photo</figcaption>
          <div className="pill" aria-live="polite">
            <span key={run} className="ring" style={{ animationDuration: `${reduced ? 600 : SCAN_MS}ms` }} />
            <span>{phase === 'scan' ? `${steps[step]}…` : 'Preview ready'}</span>
          </div>
        </figure>

        <div className="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6" /></svg></div>

        <figure className={`frame after ${phase === 'done' ? 'is-revealed' : ''}`}>
          <div className="placeholder" aria-hidden="true"><span>Preview appears here</span></div>
          <div className="reveal" key={`r${run}`}><Portrait wear={product.id} title={`Preview wearing ${product.label}`} /></div>
          <figcaption>Preview · {product.label}</figcaption>
        </figure>
      </div>

      <div className="chips" role="group" aria-label="Try a product">
        {DEMO_PRODUCTS.map((p, i) => (
          <button key={p.id} type="button" aria-pressed={i === index} onClick={() => choose(i)}>
            <span className={`swatch s-${p.id}`} aria-hidden="true" />{p.kind}
          </button>
        ))}
      </div>
    </div>
  );
}
