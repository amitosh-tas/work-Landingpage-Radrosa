import { useEffect, useState } from 'react';
import { DEMO_PRODUCTS } from '../config.js';

const SCAN_PASS_MS = 1000;
const SCAN_COUNT = 3;
const SCAN_MS = SCAN_PASS_MS * SCAN_COUNT;

const previewAssets = {
  base: '/previews/stock_preview.jpg',
  // The existing file is spelled "earings.jpg" in public/previews...
  earrings: '/previews/earrings.jpg',
  hat: '/previews/had.jpg',
  glasses: '/previews/glasses.jpg',
  necklace: '/previews/necklace.jpg',
};

export default function ScanDemo() {
  const [selectedCategory, setSelectedCategory] = useState('earrings');
  const [scanCycle, setScanCycle] = useState(0);
  const [isScanning, setIsScanning] = useState(true);
  const [scanStep, setScanStep] = useState(0);
  const product = DEMO_PRODUCTS.find(({ id }) => id === selectedCategory) ?? DEMO_PRODUCTS[0];
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    Object.values(previewAssets).forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  useEffect(() => {
    const duration = reducedMotion ? 600 : SCAN_MS;
    setIsScanning(true);
    setScanStep(0);
    const stepTimer = window.setTimeout(() => setScanStep(1), duration * 0.48);
    const doneTimer = window.setTimeout(() => setIsScanning(false), duration);
    return () => {
      window.clearTimeout(stepTimer);
      window.clearTimeout(doneTimer);
    };
  }, [scanCycle, reducedMotion]);

  const chooseCategory = (id) => {
    if (id === selectedCategory) return;
    setSelectedCategory(id);
    setIsScanning(true);
    setScanStep(0);
    setScanCycle((cycle) => cycle + 1);
  };

  return (
    <div className="demo">
      <div className="demo-frames">
        <figure className={`frame before ${isScanning ? 'is-scanning' : ''}`}>
          <img className="demo-photo" src={previewAssets.base} alt="Shopper photo used for the try-on preview" fetchPriority="high" />
          <div className="scanner" aria-hidden="true">
            <span className="dots" /><span className="beam" />
            <span className="corner c1" /><span className="corner c2" /><span className="corner c3" /><span className="corner c4" />
          </div>
          <figcaption>Shopper's photo</figcaption>
          <div className="pill" aria-live="polite">
            <span key={scanCycle} className="ring" style={{ animationDuration: `${reducedMotion ? 600 : SCAN_MS}ms` }} />
            <span>{isScanning ? (scanStep === 0 ? 'Scanning the photo…' : `Preparing ${product.kind.toLowerCase()} preview…`) : 'Preview ready'}</span>
          </div>
        </figure>

        <div className="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6" /></svg></div>

        <figure className={`frame after ${isScanning ? 'is-scanning' : ''}`}>
          {isScanning && <div className="placeholder" aria-hidden="true"><span>Matching your preview…</span></div>}
          <img
            key={product.id}
            className="demo-photo preview-photo"
            src={previewAssets[product.id]}
            alt={`Preview wearing ${product.kind.toLowerCase()}`}
            decoding="async"
          />
          <figcaption aria-live="polite">Preview · {product.kind}</figcaption>
        </figure>
      </div>

      <div className="chips" role="group" aria-label="Try a product">
        {DEMO_PRODUCTS.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === selectedCategory}
            onClick={() => chooseCategory(item.id)}
          >
            <span className={`swatch s-${item.id}`} aria-hidden="true" />{item.kind}
          </button>
        ))}
      </div>
    </div>
  );
}
