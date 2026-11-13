import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import NotFound from './NotFound.jsx'

const documents = {
  terms: {
    title: 'Terms of Sale',
    updated: 'November 2026',
    intro:
      'These terms govern purchases made from Maison Lumière online and in our Paris atelier. By placing an order you accept them.',
    sections: [
      {
        heading: 'Orders and acceptance',
        body: [
          'An order is accepted when we send a written confirmation and issue your order number. We may decline an order where a piece is no longer available, where a stone cannot be matched, or where we suspect fraud.',
          'Bespoke commissions and engraved pieces are confirmed only after a written brief and a deposit of 50%.',
        ],
      },
      {
        heading: 'Prices and payment',
        body: [
          'Prices are shown in US dollars and include French VAT where applicable. Duties and taxes for destinations outside the EU are calculated at checkout.',
          'Payment is taken at the time the order is confirmed. We accept major cards, PayPal and bank transfer for orders above $10,000.',
        ],
      },
      {
        heading: 'Delivery',
        body: [
          'Every shipment is insured, tracked and requires a signature. Paris and EU orders arrive in 2–3 business days; international orders in 3–5.',
          'Risk passes to you on delivery. If a parcel arrives damaged, contact client services within 48 hours and keep the original packaging.',
        ],
      },
      {
        heading: 'Returns and exchanges',
        body: [
          'Unworn pieces may be returned within 30 days of delivery with their certificate and packaging. Contact client services and we will arrange a prepaid, insured label.',
          'Engraved pieces, bespoke commissions and gift cards are final sale, though they remain eligible for lifetime servicing.',
        ],
      },
      {
        heading: 'Repairs and servicing',
        body: [
          'Every piece includes lifetime cleaning, inspection and re-polishing. The first ring resize within twelve months is complimentary; later resizes and restoration are quoted at cost.',
        ],
      },
      {
        heading: 'Contact',
        body: [
          'Maison Lumière, 18 Rue de la Paix, 75002 Paris, France. clients@maisonlumiere.com · +33 1 84 74 20 10.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    updated: 'November 2026',
    intro:
      'We collect only what is needed to make, deliver and service your jewellery — and we never sell it. This policy explains what we hold and why.',
    sections: [
      {
        heading: 'What we collect',
        body: [
          'Contact details (name, email, phone, delivery address), order history, ring sizes, and the notes you give us for engraving or appointments.',
          'Payment details are handled by our payment providers and are never stored on our servers.',
        ],
      },
      {
        heading: 'How we use it',
        body: [
          'To prepare and deliver your order, to service and repair pieces, to answer your enquiries, and — where you have asked — to send collection previews and atelier letters.',
          'We keep records of bespoke commissions so that a piece can be repaired or recreated years later.',
        ],
      },
      {
        heading: 'Sharing',
        body: [
          'We share only what is necessary with insured couriers, payment providers and our workshop management system. All are bound by confidentiality and data-processing agreements.',
        ],
      },
      {
        heading: 'Cookies and local storage',
        body: [
          'Essential cookies keep your session and bag working. Your bag and wishlist are saved in your browser\u2019s local storage on this device, not on our servers.',
          'Analytics cookies are used only with your consent, and you can withdraw it at any time from the cookie preferences link in the footer.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'You may request a copy of your data, correct it, or ask us to delete what we are not required to keep for accounting and warranty purposes.',
          'Write to privacy@maisonlumiere.com and we will respond within 30 days.',
        ],
      },
    ],
  },
  accessibility: {
    title: 'Accessibility',
    updated: 'November 2026',
    intro:
      'A house that designs for everyone should be usable by everyone. We aim to meet WCAG 2.2 level AA across the storefront and the atelier appointment flow.',
    sections: [
      {
        heading: 'What we have done',
        body: [
          'Every page is built with semantic landmarks, a visible keyboard focus ring and a skip-to-content link. Interactive elements can be reached and operated without a mouse.',
          'Product imagery carries descriptive alternative text, and colour combinations are checked for readable contrast against our ivory and champagne backgrounds.',
        ],
      },
      {
        heading: 'Motion and media',
        body: [
          'Animations are brief and never block reading. The site does not autoplay audio or video, and reduced-motion preferences are respected where animation is decorative.',
        ],
      },
      {
        heading: 'Ongoing work',
        body: [
          'We audit the storefront each season with assistive technology and fix what we find. If something is difficult to use, tell us — it is the fastest route to a fix.',
        ],
      },
      {
        heading: 'Feedback',
        body: [
          'Email accessibility@maisonlumiere.com or call +33 1 84 74 20 10, Monday to Saturday, 10am–7pm CET. We can also take orders by telephone.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    updated: 'November 2026',
    intro:
      'This site uses a small number of cookies and similar technologies. Here is what each one does, and how to control them.',
    sections: [
      {
        heading: 'Essential cookies',
        body: [
          'These keep your session secure and your bag available as you move through the site. They cannot be switched off without breaking the storefront.',
        ],
      },
      {
        heading: 'Preferences',
        body: [
          'Your bag and wishlist are stored locally in your browser so they are still here when you return. They never leave your device and are not used for advertising.',
        ],
      },
      {
        heading: 'Analytics',
        body: [
          'With your consent we measure which collections are viewed and where visitors leave the checkout, in aggregate and without identifying individuals. Declining simply means we do not receive these measurements.',
        ],
      },
      {
        heading: 'Managing cookies',
        body: [
          'You can clear or block cookies in your browser settings at any time. Blocking essential cookies will prevent checkout from working.',
          'Questions about tracking can be sent to privacy@maisonlumiere.com.',
        ],
      },
    ],
  },
}

const order = ['terms', 'privacy', 'accessibility', 'cookies']

export default function Legal() {
  const { doc = 'terms' } = useParams()
  const document = documents[doc]

  if (!document) return <NotFound />

  return (
    <div className="container legal">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>{document.title}</span>
      </nav>

      <header className="legal__head">
        <p className="eyebrow">Client information</p>
        <h1 className="page-title">{document.title}</h1>
        <p className="legal__updated">Last updated · {document.updated}</p>
      </header>

      <div className="legal__grid">
        <nav className="legal__nav" aria-label="Legal documents">
          {order.map((slug) => (
            <Link
              key={slug}
              to={`/legal/${slug}`}
              className={slug === doc ? 'is-active' : ''}
              aria-current={slug === doc ? 'page' : undefined}
            >
              {documents[slug].title}
              <Icon name="arrowRight" size={14} />
            </Link>
          ))}
        </nav>

        <article className="legal__body">
          <p className="legal__intro">{document.intro}</p>
          {document.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <div className="legal__foot">
            <Icon name="mail" size={18} />
            <p>
              Questions about this document? Write to <a href="mailto:clients@maisonlumiere.com">clients@maisonlumiere.com</a>{' '}
              and our client team will answer within one business day.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
