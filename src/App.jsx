import { useState } from 'react';
import ScanDemo from './components/ScanDemo.jsx';
import Pricing from './components/Pricing.jsx';
import { SHOPIFY_APP_URL, CONTACT_EMAIL, CREDITS_PER_IMAGE } from './config.js';

const ShopifyBag = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="bag"><path d="M6 8h12l-1 12H7L6 8z" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" fill="none" /></svg>
);
const Install = ({ children = 'Add to Shopify', big }) => (
  <a className={`btn primary ${big ? 'big' : ''}`} href={SHOPIFY_APP_URL} target="_blank" rel="noreferrer"><ShopifyBag />{children}</a>
);

const WEARS = ['Earrings', 'Necklaces', 'Nose pins', 'Glasses', 'Sunglasses', 'Hats & caps', 'Wigs & hair', 'Beards', 'Watches', 'Bracelets', 'Rings'];

const FAQ = [
  ['Do I need to set anything up per product?', 'No. lookOn reads your Shopify products and works out how each one is worn from its type, tags and title. You can correct any product or a whole product type in the app, and it follows the variant the shopper picks.'],
  ['What does a preview cost?', `One preview uses ${CREDITS_PER_IMAGE} credits. Packs start at $10 for 500 credits (50 previews). Credits are only used when a shopper actually gets a preview.`],
  ['What happens when credits run out?', 'Try-on pauses on your store and you choose what shoppers see: a short message or no block at all. Buy a pack and it switches back on right away.'],
  ['Can I limit how much each shopper uses?', 'Yes. Give a few free previews, then ask for an email or a sign-in to their account. You can also cap previews per product and per day.'],
  ['Are shopper photos stored?', 'No. Photos are used to make the preview and are not saved. Shoppers confirm they are 18 or over and that the photo is of them before anything is sent.'],
  ['Can I change the wording on my store?', 'Every line the shopper sees, from the button to the error messages, can be changed in the app or in your theme editor.'],
];

export default function App() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <div className="wrap nav-in">
          <a className="logo" href="#top" aria-label="lookOn home"><img className="brand-logo" src="/lookon-logo.svg" alt="" /></a>
          <nav aria-label="Main">
            <a href="#how">How it works</a>
            <a href="#merchants">For your store</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">Questions</a>
          </nav>
          <Install />
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="hero" id="top">
          <div className="wrap hero-in">
            <div className="hero-copy">
              <p className="tagline"><span className="dot" aria-hidden="true" />Virtual try-on for Shopify</p>
              <h1>See it on.<br />Then buy it.</h1>
              <p className="lede">Shoppers add a selfie and see your earrings, glasses, hats and more on themselves, right on the product page. Fewer guesses, fewer returns.</p>
              <div className="cta-row">
                <Install big />
                <a className="btn ghost big" href="#pricing">See pricing</a>
              </div>
              <ul className="facts">
                <li><b>Free</b> to install</li>
                <li><b>{CREDITS_PER_IMAGE} credits</b> per preview</li>
                <li><b>No code</b> needed</li>
              </ul>
            </div>
            <ScanDemo />
          </div>
        </section>

        {/* WHAT IT WORKS WITH */}
        <section className="wears" aria-label="Products lookOn works with">
          <div className="marquee"><div className="track">{[...WEARS, ...WEARS].map((w, i) => <span key={i} aria-hidden={i >= WEARS.length}>{w}</span>)}</div></div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how" id="how">
          <div className="wrap">
            <header className="section-head"><h2>Live on your store in minutes.</h2><p>No developer, no product setup. Your theme keeps its look.</p></header>
            <ol className="steps">
              <li><span className="n">1</span><h3>Add the app</h3><p>Install lookOn from Shopify. Your products are read automatically, variants included.</p></li>
              <li><span className="n">2</span><h3>Switch on the block</h3><p>One click in the theme editor puts the try-on next to your Add to cart button.</p></li>
              <li><span className="n">3</span><h3>Buy credits</h3><p>Pick a pack and pay in a few clicks, right inside your Shopify admin.</p></li>
              <li><span className="n">4</span><h3>Shoppers try it on</h3><p>They add a photo and see the exact colour or size they picked, in seconds.</p></li>
            </ol>
          </div>
        </section>

        {/* FOR MERCHANTS */}
        <section className="merchants" id="merchants">
          <div className="wrap merchants-in">
            <header className="section-head left"><h2>Built for the people running the store.</h2><p>Everything is in one place inside your Shopify admin.</p></header>
            <div className="features">
              <article className="feature wide">
                <div><h3>See who tries what</h3><p>Every preview with its product, variant, device and country. Filter by date, product or shopper and download a CSV.</p></div>
                <div className="mock table" aria-hidden="true">
                  <div className="row head"><span>Product</span><span>Shopper</span><span>Result</span></div>
                  <div className="row"><span>Gold hoops</span><span>ana@…</span><span className="ok">Preview</span></div>
                  <div className="row"><span>Wool beanie · Red</span><span>Visitor</span><span className="ok">Preview</span></div>
                  <div className="row"><span>Round frames</span><span>ravi@…</span><span className="warn">Asked email</span></div>
                </div>
              </article>
              <article className="feature">
                <h3>Collect emails as you go</h3>
                <p>Give a free preview or two, then ask for an email or a sign-in. Add an "email me offers" box if you like.</p>
                <div className="mock gate" aria-hidden="true"><span>you@example.com</span><b>Continue</b></div>
              </article>
              <article className="feature">
                <h3>Your words, your limits</h3>
                <p>Change any line shoppers see. Cap previews per product or per day so credits go further.</p>
                <div className="mock limits" aria-hidden="true"><span>Free previews <b>1</b></span><span>Per product <b>10</b></span></div>
              </article>
              <article className="feature">
                <h3>Credits you can see</h3>
                <p>Your balance shows how many previews are left, with a warning before it runs out.</p>
                <div className="mock balance" aria-hidden="true"><span className="mini-ring" /><span><b>2,480</b> credits<br />248 previews left</span></div>
              </article>
            </div>
          </div>
        </section>

        <Pricing />

        {/* FAQ */}
        <section className="faq" id="faq">
          <div className="wrap faq-in">
            <header className="section-head left"><h2>Questions merchants ask.</h2><p>Something else? Write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p></header>
            <div className="qa">
              {FAQ.map(([q, a], i) => (
                <div key={q} className={`q ${open === i ? 'open' : ''}`}>
                  <h3><button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{q}<span aria-hidden="true" className="plus" /></button></h3>
                  <div className="a" hidden={open !== i}><p>{a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final">
          <div className="wrap final-in">
            <h2>Let shoppers see it on themselves.</h2>
            <p>Install lookOn free and switch it on in your theme today.</p>
            <Install big>Add lookOn to Shopify</Install>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <a className="logo" href="#top" aria-label="lookOn home"><img className="brand-logo" src="/lookon-logo.svg" alt="" /></a>
          <p>Previews are made with AI and are approximate: colour, size and fit can differ a little from the real product.</p>
          <p>© {new Date().getFullYear()} lookOn. <a href={`mailto:${CONTACT_EMAIL}`}>Contact us</a></p>
        </div>
      </footer>
    </>
  );
}
