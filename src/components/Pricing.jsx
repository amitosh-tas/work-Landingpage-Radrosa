import { useMemo, useState } from 'react';
import { PACKS, CREDITS_PER_IMAGE, CURRENCY, SHOPIFY_APP_URL } from '../config.js';

const money = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: CURRENCY, maximumFractionDigits: n % 1 ? 2 : 0 }).format(n);
const num = (n) => new Intl.NumberFormat('en-US').format(n);

// Which packs cover a number of previews with the least spend (packs can be bought more than once).
function bestMix(previews) {
  const need = previews * CREDITS_PER_IMAGE;
  const sorted = [...PACKS].sort((a, b) => b.credits - a.credits);
  let best = null;
  const walk = (i, left, picked, spent) => {
    if (best && spent >= best.spent) return;
    if (left <= 0) { best = { picked: [...picked], spent }; return; }
    if (i >= sorted.length) return;
    const p = sorted[i];
    const max = Math.ceil(left / p.credits);
    for (let k = max; k >= 0; k--) {
      for (let j = 0; j < k; j++) picked.push(p);
      walk(i + 1, left - k * p.credits, picked, spent + k * p.price);
      picked.length -= k;
    }
  };
  walk(0, need, [], 0);
  const counts = new Map();
  for (const p of best.picked) counts.set(p, (counts.get(p) || 0) + 1);
  return { need, spent: best.spent, credits: best.picked.reduce((t, p) => t + p.credits, 0), lines: [...counts].map(([p, c]) => ({ p, c })) };
}

export default function Pricing() {
  const [previews, setPreviews] = useState(400);
  const mix = useMemo(() => bestMix(previews), [previews]);
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <header className="section-head">
          <h2>Pay only for previews your shoppers see.</h2>
          <p>Installing is free. Buy credits when you need them: one preview uses {CREDITS_PER_IMAGE} credits, and a preview that fails costs nothing.</p>
        </header>

        <div className="packs">
          {PACKS.map((p) => (
            <article key={p.price} className={`pack ${p.popular ? 'popular' : ''}`}>
              {p.popular && <span className="flag">Most chosen</span>}
              <p className="pack-price">{money(p.price)}</p>
              <p className="pack-credits"><b>{num(p.credits)}</b> credits</p>
              <div className="pack-economics">
                <span>Cost <b>{money(p.cost)}</b></span>
                <span>Profit <b>{money(p.profit)}</b></span>
              </div>
              <p className="pack-images">{num(p.credits / CREDITS_PER_IMAGE)} try-on images</p>
              <p className="pack-unit">{money(p.price / (p.credits / CREDITS_PER_IMAGE))} per image</p>
            </article>
          ))}
        </div>

        <div className="calc">
          <div className="calc-in">
            <label htmlFor="previews">How many previews do you expect a month?</label>
            <output htmlFor="previews">{num(previews)} previews</output>
            <input id="previews" type="range" min="50" max="5000" step="50" value={previews} onChange={(e) => setPreviews(Number(e.target.value))} />
            <div className="calc-scale"><span>50</span><span>5,000</span></div>
          </div>
          <div className="calc-out">
            <p className="calc-total"><b>{money(mix.spent)}</b> a month</p>
            <p>{num(mix.need)} credits needed · {mix.lines.map(({ p, c }) => `${c} × ${money(p.price)} pack`).join(' + ')}</p>
            <p className="muted">Gives {num(mix.credits)} credits = {num(Math.floor(mix.credits / CREDITS_PER_IMAGE))} previews.</p>
            <a className="btn primary" href={SHOPIFY_APP_URL} target="_blank" rel="noreferrer">Add lookOn to Shopify</a>
          </div>
        </div>
      </div>
    </section>
  );
}
