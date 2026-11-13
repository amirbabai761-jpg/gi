import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { IMAGES, photo } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

const faqs = [
  {
    q: 'How long does delivery take?',
    a: 'Paris and EU orders arrive in 2–3 business days; international orders in 3–5. Every shipment is insured and fully tracked, and someone must sign for the parcel.',
  },
  {
    q: 'Can I return or exchange a piece?',
    a: 'Yes — within 30 days of delivery, in unworn condition with its certificate and packaging. Engraved and bespoke commissions are final sale. Contact client services and we will send a prepaid label.',
  },
  {
    q: 'Do you offer resizing?',
    a: 'The first resize is complimentary within 12 months on all rings. After that, resizing is offered at cost for the lifetime of the piece.',
  },
  {
    q: 'Are your diamonds and gold responsibly sourced?',
    a: 'All diamonds are lab-grown or traceable to Kimberley-certified sources, and all gold is 100% recycled and hallmarked. Stone certificates accompany every order.',
  },
  {
    q: 'Can I see a piece before buying?',
    a: 'Of course. Book a private appointment in our Paris atelier or by video, and we will prepare the pieces you would like to see.',
  },
]

export default function About() {
  const { notify } = useStore()
  const [form, setForm] = useState({ name: '', email: '', date: '', message: '' })

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container about-hero__inner">
          <div>
            <p className="eyebrow">The Maison</p>
            <h1 className="page-title page-title--xl">
              Jewelry made to be
              <em>lived in</em>
            </h1>
            <p className="about-hero__copy">
              Founded in Paris in 1987, Maison Lumière is a small house of nine goldsmiths making fine
              jewellery for people who intend to wear it — every day, for decades.
            </p>
            <div className="about-stats">
              <div><strong>1987</strong><span>Founded in Paris</span></div>
              <div><strong>9</strong><span>Goldsmiths at the bench</span></div>
              <div><strong>40+</strong><span>Countries delivered</span></div>
            </div>
          </div>
          <div className="about-hero__media">
            <img src={photo(IMAGES.portraitPearl, 1200)} alt="Woman wearing a fine gold necklace" />
          </div>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story__inner">
          <div className="about-story__media">
            <img src={photo(IMAGES.mannequin, 1000)} alt="Fine necklaces displayed on a linen bust" loading="lazy" />
          </div>
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="section-title">A house built around the bench</h2>
            <p>
              Élodie Marchand trained as a stone-setter before founding the maison in a single room above
              a print shop. Nearly four decades later, the atelier is larger but the method has not
              changed: every piece is drawn by hand, cast in small batches, set under a loupe and polished
              by the same people who signed off on the wax.
            </p>
            <p>
              We make fewer designs than most houses, and keep them for longer. Our collections are
              revisited rather than replaced — a ring bought in 1994 can still be serviced, resized and
              re-polished by the goldsmiths who built it.
            </p>
            <Link className="link-arrow" to="/shop">
              Explore the collection
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="about-craft" id="craft">
        <div className="container about-craft__inner">
          <img src={photo(IMAGES.artisan, 1300)} alt="Goldsmith working at the bench in the atelier" loading="lazy" />
          <div className="about-craft__body">
            <p className="eyebrow eyebrow--light">Craftsmanship</p>
            <h2>Four pairs of hands, one piece</h2>
            <p>
              The model maker, the caster, the setter and the polisher each leave their own signature on a
              piece. Nothing is finished by machine alone. Claws are shaped under a loupe; surfaces are
              polished until the reflection becomes continuous.
            </p>
            <ul className="about-craft__list">
              <li><Icon name="check" size={16} /> Hand-drawn designs, cast in small batches</li>
              <li><Icon name="check" size={16} /> Stones set under a loupe, one at a time</li>
              <li><Icon name="check" size={16} /> Final polish by the goldsmith who signed the wax</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section about-values" id="sourcing">
        <div className="container">
          <div className="section-head section-head--center">
            <div>
              <p className="eyebrow">Ethical luxury</p>
              <h2 className="section-title">Beauty, without compromise</h2>
            </div>
          </div>
          <div className="value-grid">
            <div className="value-card">
              <Icon name="diamond" size={26} stroke={1} />
              <h3>Traceable stones</h3>
              <p>Every diamond is lab-grown or Kimberley-certified, and every coloured stone arrives with its origin documented.</p>
            </div>
            <div className="value-card">
              <Icon name="refresh" size={26} stroke={1} />
              <h3>Recycled gold</h3>
              <p>100% recycled 18k gold, refined in France and hallmarked at assay. No newly mined gold, since 2018.</p>
            </div>
            <div className="value-card">
              <Icon name="sparkle" size={26} stroke={1} />
              <h3>Made to be repaired</h3>
              <p>Lifetime servicing, resizing and restoration — because the most sustainable piece is the one you keep.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-packaging" id="packaging">
        <div className="container about-packaging__inner">
          <div>
            <p className="eyebrow">Signature packaging</p>
            <h2 className="section-title section-title--sm">The arrival</h2>
            <p>
              Every piece leaves the atelier in a lacquered case lined with suede, tied with silk ribbon.
              A certificate of authenticity and a handwritten card accompany each order — tell us what to
              write and our calligrapher will set it in ink.
            </p>
            <ul className="about-packaging__list">
              <li><Icon name="gift" size={17} /> Complimentary gift wrapping</li>
              <li><Icon name="mail" size={17} /> Handwritten card in your words</li>
              <li><Icon name="check" size={17} /> Certificate of authenticity</li>
            </ul>
          </div>
          <img src={photo('1515562141207-7a88fb7ce338', 900)} alt="Pearl necklace presented in signature packaging" loading="lazy" />
        </div>
      </section>

      <section className="section about-service" id="shipping">
        <div className="container about-service__grid">
          <div>
            <p className="eyebrow">Client care</p>
            <h2 className="section-title section-title--sm">Shipping & returns</h2>
            <p>
              Complimentary insured delivery worldwide, signature required. Paris and EU orders arrive in
              2–3 business days; international orders in 3–5. Returns are accepted within 30 days of
              delivery in unworn condition, with a prepaid label arranged by our client team.
            </p>
            <p>
              Duties and taxes are calculated at checkout for all destinations. Engraved and bespoke
              pieces are final sale but remain eligible for lifetime servicing.
            </p>
          </div>
          <div id="sizing">
            <p className="eyebrow">Ring sizing</p>
            <h2 className="section-title section-title--sm">Find your size</h2>
            <p className="about-service__hint">Measure the inner diameter of a ring that fits, or book a sizing appointment and we will send a ring sizer.</p>
            <table className="size-table">
              <thead>
                <tr><th>EU</th><th>US</th><th>UK</th><th>Inner ø</th></tr>
              </thead>
              <tbody>
                <tr><td>48</td><td>4.5</td><td>I½</td><td>15.3mm</td></tr>
                <tr><td>50</td><td>5</td><td>J½</td><td>15.7mm</td></tr>
                <tr><td>52</td><td>6</td><td>L½</td><td>16.5mm</td></tr>
                <tr><td>54</td><td>7</td><td>N½</td><td>17.3mm</td></tr>
                <tr><td>56</td><td>7.5</td><td>O½</td><td>17.7mm</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section about-care">
        <div className="container about-care__inner" id="care">
          <div>
            <p className="eyebrow">Care & repair</p>
            <h2 className="section-title section-title--sm">Wearing it well</h2>
            <p>
              Store pieces separately, avoid perfume and chlorine, and bring your jewellery in for a
              complimentary clean and inspection once a year. We also restore inherited pieces and remake
              heirlooms into contemporary settings.
            </p>
            <a className="link-arrow" href="mailto:clients@maisonlumiere.com">
              Book a servicing appointment
              <Icon name="arrowRight" size={16} />
            </a>
          </div>
          <div className="about-care__card">
            <Icon name="sparkle" size={26} stroke={1} />
            <p>Each order includes lifetime servicing — cleaning, inspection and re-polishing at no cost.</p>
          </div>
        </div>
      </section>

      <section className="section about-faq" id="faq">
        <div className="container about-faq__inner">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2 className="section-title">Questions, answered</h2>
            <p>If your question is not here, our client team answers within a business day.</p>
            <a className="link-arrow" href="mailto:clients@maisonlumiere.com">
              Write to client services
              <Icon name="arrowRight" size={16} />
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>
                  {faq.q}
                  <Icon name="chevronDown" size={16} />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="appointment" id="appointment">
        <div className="container appointment__inner">
          <div className="appointment__intro">
            <p className="eyebrow eyebrow--light">Private consultation</p>
            <h2>An hour with our jewellers</h2>
            <p>
              In the Paris atelier or by video — a quiet appointment to see pieces in person, discuss a
              bespoke commission, or find the right engagement ring. Complimentary, with no obligation.
            </p>
            <ul>
              <li><Icon name="pin" size={16} /> 18 Rue de la Paix, 75002 Paris</li>
              <li><Icon name="phone" size={16} /> +33 1 84 74 20 10</li>
              <li><Icon name="mail" size={16} /> clients@maisonlumiere.com</li>
            </ul>
          </div>

          <form
            className="appointment__form"
            onSubmit={(e) => {
              e.preventDefault()
              notify('Appointment request noted. (Demo: no email has been sent.)')
              setForm({ name: '', email: '', date: '', message: '' })
            }}
          >
            <div className="form-row">
              <label className="field">
                <span>Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </label>
              <label className="field">
                <span>Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="field">
              <span>Preferred date</span>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </label>
            <label className="field">
              <span>What would you like to see?</span>
              <textarea
                rows="3"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Engagement rings, a bespoke commission, a gift…"
              />
            </label>
            <button className="btn btn--gold btn--block" type="submit">
              Request appointment
              <Icon name="arrowRight" size={16} />
            </button>
            <p className="fineprint">Demo storefront — requests are not transmitted.</p>
          </form>
        </div>
      </section>
    </div>
  )
}
