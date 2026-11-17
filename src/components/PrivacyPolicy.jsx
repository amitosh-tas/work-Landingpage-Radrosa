import { useEffect } from 'react';
import { CONTACT_EMAIL } from '../config.js';

const UPDATED = 'November 17, 2026';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy · lookOn';
    return () => { document.title = 'lookOn · Virtual try-on for Shopify'; };
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <div className="wrap nav-in">
          <a className="logo" href="/" aria-label="lookOn home"><img className="brand-logo" src="/lookon-logo.svg" alt="" /></a>
          <a className="btn ghost" href="/">Back to lookOn</a>
        </div>
      </header>
      <main id="main" className="privacy-page">
        <article className="wrap privacy-content">
          <p className="tagline"><span className="dot" aria-hidden="true" />Your information, explained</p>
          <h1>Privacy policy</h1>
          <p className="privacy-updated">Last updated: {UPDATED}</p>
          <p>This policy explains how lookOn handles information when shoppers use a lookOn try-on experience and when merchants install or use the lookOn Shopify app. We use information to provide and improve the service, and we do not sell personal information.</p>

          <h2>Who is responsible</h2>
          <p>“lookOn,” “we,” and “us” refer to the team operating the lookOn service. For privacy questions, contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. When a shopper uses lookOn on a merchant’s store, the merchant is responsible for its store and customer practices; lookOn processes information needed to provide the try-on service.</p>

          <h2>Information we handle</h2>
          <ul>
            <li><strong>Shopper photos:</strong> a shopper may choose a photo to generate a try-on preview. Photos are used to create the requested preview and are not saved by lookOn after processing.</li>
            <li><strong>Preview and store details:</strong> we process the selected product and variant and information about the preview result so the feature works and merchants can understand usage.</li>
            <li><strong>Optional contact details:</strong> where a merchant enables an email or sign-in gate, the shopper may provide an email address. Merchants control that gate and any marketing choices they offer.</li>
            <li><strong>Merchant account and app information:</strong> Shopify store and account details, product and variant data, app settings, credit balance, and billing or transaction records needed to run the app.</li>
            <li><strong>Basic technical data:</strong> our systems and service providers may process technical information such as request, device, and diagnostic data to deliver the service, protect it, and troubleshoot problems.</li>
          </ul>

          <h2>How we use information</h2>
          <p>We use information to generate try-on previews, operate the Shopify app and merchant dashboard, track credit usage, provide support, prevent abuse, keep the service secure, and meet legal obligations. We do not use shopper photos to identify people, build advertising profiles, or train general-purpose AI models.</p>

          <h2>When information is shared</h2>
          <p>We share information only as needed to provide the service: with infrastructure and image-processing providers that help generate previews and host the app; with Shopify to support installation, store access, and billing; with the merchant whose store the shopper is using; or when required to protect the service, comply with law, or respond to a valid legal request. Service providers may process information on our instructions.</p>

          <h2>Retention and security</h2>
          <p>Shopper photos are not saved by lookOn after preview processing. Other information is kept only as long as needed for the purposes above, including operating merchant records, resolving disputes, and meeting legal or accounting requirements. We use reasonable safeguards designed to protect information, though no online service can guarantee absolute security.</p>

          <h2>Your choices and privacy rights</h2>
          <p>Shoppers can choose whether to upload a photo and whether to provide an optional email when a merchant offers that choice. You can ask to access, correct, or delete information associated with you, or raise another privacy request, by emailing <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. If your request concerns information held by a merchant, contact that merchant as well. Depending on where you live, you may have additional rights, such as objecting to or restricting certain processing or lodging a complaint with a data protection authority. We may need to verify a request before acting on it.</p>

          <h2>Children</h2>
          <p>lookOn is not intended for children under 18. Shoppers should only submit a photo of themselves and must confirm they are at least 18 before using the try-on feature. If you believe a child has provided information to lookOn, contact us so we can review it.</p>

          <h2>International processing</h2>
          <p>We and our service providers may process information in countries other than the one where you live. Privacy protections in those countries may differ. Where applicable law requires safeguards for an international transfer, we will use an appropriate transfer mechanism.</p>

          <h2>Changes to this policy</h2>
          <p>We may update this policy as the service or our practices change. We will post the current version here and update the date above. Material changes will be highlighted where appropriate.</p>

          <h2>Contact</h2>
          <p>Questions or requests? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
        </article>
      </main>
      <footer className="foot">
        <div className="wrap foot-in">
          <a className="logo" href="/" aria-label="lookOn home"><img className="brand-logo" src="/lookon-logo.svg" alt="" /></a>
          <p>Previews are made with AI and are approximate: colour, size and fit can differ a little from the real product.</p>
          <p>© {new Date().getFullYear()} lookOn. <a href="/privacy">Privacy policy</a> · <a href={`mailto:${CONTACT_EMAIL}`}>Contact us</a></p>
        </div>
      </footer>
    </>
  );
}
