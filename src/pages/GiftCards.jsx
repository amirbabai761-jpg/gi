import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { formatPrice, giftCardAmounts, getGiftCard, photo } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

const steps = [
  {
    icon: 'gift',
    title: 'Choose an amount',
    copy: 'From a single everyday piece to a bridal commission — the amount stays on the card until it is spent.',
  },
  {
    icon: 'mail',
    title: 'Delivered by email',
    copy: 'Arrives within one business day, wrapped in a digital envelope with your handwritten message.',
  },
  {
    icon: 'diamond',
    title: 'Chosen in person',
    copy: 'Redeemable online or in the Paris atelier, where our jewellers will help find the piece.',
  },
]

export default function GiftCards() {
  const { addToCart, openCart } = useStore()
  const [amount, setAmount] = useState(500)
  const [form, setForm] = useState({ recipient: '', email: '', sender: '', message: '', date: '' })

  const selected = getGiftCard(amount)

  const submit = (event) => {
    event.preventDefault()
    if (!selected) return
    addToCart(selected, {
      qty: 1,
      metal: 'Digital delivery',
      size: form.recipient ? `For ${form.recipient}` : 'By email',
    })
    openCart()
  }

  return (
    <div className="gift-page">
      <section className="container gift-hero">
        <div className="gift-hero__copy">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Gift Cards</span>
          </nav>
          <p className="eyebrow">The gift edit</p>
          <h1 className="page-title page-title--xl">
            The gift of
            <em>choosing</em>
          </h1>
          <p className="gift-hero__lede">
            For the piece only they can choose. A Maison Lumière gift card opens the whole collection —
            and an invitation to the atelier, should they want a jeweller's eye.
          </p>
          <ul className="gift-hero__points">
            <li><Icon name="check" size={15} /> Delivered by email within one business day</li>
            <li><Icon name="check" size={15} /> Valid for 24 months, online and in the atelier</li>
            <li><Icon name="check" size={15} /> Complimentary signature packaging with every redemption</li>
          </ul>
        </div>
        <figure className="gift-hero__media">
          <img
            src={photo('1515562141207-7a88fb7ce338', 1100)}
            alt="A gift card presented in Maison Lumière signature packaging"
          />
          <figcaption>Presented in a lacquered case and silk ribbon</figcaption>
        </figure>
      </section>

      <section className="container gift-builder">
        <form className="gift-form" onSubmit={submit}>
          <fieldset className="gift-amounts">
            <legend>
              <span className="eyebrow">Step one</span>
              Choose an amount
            </legend>
            <div className="gift-amounts__grid" role="radiogroup" aria-label="Gift card amount">
              {giftCardAmounts.map((value) => (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={amount === value}
                  className={`gift-amount ${amount === value ? 'is-active' : ''}`}
                  onClick={() => setAmount(value)}
                >
                  {formatPrice(value)}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="gift-details">
            <legend>
              <span className="eyebrow">Step two</span>
              Who is it for?
            </legend>
            <div className="form-row">
              <label className="field">
                <span>Recipient's name</span>
                <input
                  required
                  placeholder="Their name"
                  value={form.recipient}
                  onChange={(e) => setForm({ ...form, recipient: e.target.value })}
                />
              </label>
              <label className="field">
                <span>Recipient's email</span>
                <input
                  type="email"
                  required
                  placeholder="their@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>
            </div>
            <div className="form-row">
              <label className="field">
                <span>From</span>
                <input
                  required
                  placeholder="Your name"
                  value={form.sender}
                  onChange={(e) => setForm({ ...form, sender: e.target.value })}
                />
              </label>
              <label className="field">
                <span>Send on (optional)</span>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </label>
            </div>
            <label className="field">
              <span>Your message</span>
              <textarea
                rows="3"
                placeholder="Written in our calligrapher's hand on the digital card."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
          </fieldset>

          <button className="btn btn--gold btn--block btn--lg" type="submit">
            Add gift card to bag — {formatPrice(amount)}
            <Icon name="arrowRight" size={17} />
          </button>
          <p className="fineprint">
            Demo storefront: gift cards are added to your bag like any other piece, and no email is sent.
          </p>
        </form>

        <aside className="gift-preview" aria-label="Gift card preview">
          <div className="gift-card-visual">
            <span className="gift-card-visual__brand">Maison Lumière</span>
            <em>{formatPrice(amount)}</em>
            <span className="gift-card-visual__meta">Gift card · digital delivery</span>
            <span className="gift-card-visual__line" />
            <span className="gift-card-visual__note">
              {form.recipient ? `For ${form.recipient}` : 'For the one who chooses'}
            </span>
          </div>
          <ul className="gift-preview__notes">
            <li><Icon name="lock" size={15} /> Secure, emailed redemption code</li>
            <li><Icon name="refresh" size={15} /> Balance never expires within 24 months</li>
            <li><Icon name="pin" size={15} /> Redeemable in Paris or online</li>
          </ul>
          <p className="gift-preview__help">
            Need a bespoke amount or a card for a corporate gift?{' '}
            <a href="mailto:clients@maisonlumiere.com">Write to client services</a>.
          </p>
        </aside>
      </section>

      <section className="container gift-steps">
        {steps.map((step, i) => (
          <article className="gift-step" key={step.title}>
            <span className="gift-step__index">0{i + 1}</span>
            <Icon name={step.icon} size={24} stroke={1.1} />
            <h2>{step.title}</h2>
            <p>{step.copy}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
