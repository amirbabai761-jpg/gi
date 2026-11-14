import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { formatPrice, giftCardAmounts, getGiftCard, photo } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

const steps = [
  {
    icon: 'gift',
    title: 'مبلغ را انتخاب کنید',
    copy: 'از یک قطعهٔ روزمره تا سفارشی عروس — مبلغ تا زمانی که خرج نشود روی کارت می‌ماند.',
  },
  {
    icon: 'mail',
    title: 'ارسال با ایمیل',
    copy: 'تا یک روز کاری می‌رسد، در پاکتی دیجیتال با پیام دست‌نویس شما.',
  },
  {
    icon: 'diamond',
    title: 'انتخاب حضوری',
    copy: 'قابل استفاده آنلاین یا در آتلیهٔ پاریس، جایی که جواهرسازان ما در یافتن قطعه کمک می‌کنند.',
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
      metal: 'تحویل دیجیتال',
      size: form.recipient ? `برای ${form.recipient}` : 'با ایمیل',
    })
    openCart()
  }

  return (
    <div className="gift-page">
      <section className="container gift-hero">
        <div className="gift-hero__copy">
          <nav className="breadcrumb" aria-label="مسیر صفحه">
            <Link to="/">خانه</Link>
            <span>/</span>
            <span>کارت هدیه</span>
          </nav>
          <p className="eyebrow">انتخاب هدیه</p>
          <h1 className="page-title page-title--xl">هدیه‌ای از<em>انتخاب</em>
          </h1>
          <p className="gift-hero__lede">برای قطعه‌ای که فقط خودشان می‌توانند انتخاب کنند. کارت هدیهٔ مزون لومیر همهٔ مجموعه را باز می‌کند — و دعوتی به آتلیه، اگر نگاه یک جواهرساز را بخواهند.</p>
          <ul className="gift-hero__points">
            <li><Icon name="check" size={15} />ارسال با ایمیل تا یک روز کاری</li>
            <li><Icon name="check" size={15} />تا ۲۴ ماه معتبر، آنلاین و در آتلیه</li>
            <li><Icon name="check" size={15} />بسته‌بندی امضا به‌صورت رایگان با هر استفاده</li>
          </ul>
        </div>
        <figure className="gift-hero__media">
          <img
            src={photo('1515562141207-7a88fb7ce338', 1100)}
            alt="کارت هدیه در بسته‌بندی امضای مزون لومیر"
          />
          <figcaption>ارائه‌شده در جعبهٔ لاکی و روبان ابریشمی</figcaption>
        </figure>
      </section>

      <section className="container gift-builder">
        <form className="gift-form" onSubmit={submit}>
          <fieldset className="gift-amounts">
            <legend>
              <span className="eyebrow">گام نخست</span>مبلغ را انتخاب کنید</legend>
            <div className="gift-amounts__grid" role="radiogroup" aria-label="مبلغ کارت هدیه">
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
              <span className="eyebrow">گام دوم</span>برای چه کسی است؟</legend>
            <div className="form-row">
              <label className="field">
                <span>نام گیرنده</span>
                <input
                  required
                  placeholder="نام گیرنده"
                  value={form.recipient}
                  onChange={(e) => setForm({ ...form, recipient: e.target.value })}
                />
              </label>
              <label className="field">
                <span>ایمیل گیرنده</span>
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
                <span>از</span>
                <input
                  required
                  placeholder="نام شما"
                  value={form.sender}
                  onChange={(e) => setForm({ ...form, sender: e.target.value })}
                />
              </label>
              <label className="field">
                <span>تاریخ ارسال (اختیاری)</span>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </label>
            </div>
            <label className="field">
              <span>پیام شما</span>
              <textarea
                rows="3"
                placeholder="Written in our calligrapher's hand on the digital card."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
          </fieldset>

          <button className="btn btn--gold btn--block btn--lg" type="submit">
            افزودن کارت هدیه به کیف — {formatPrice(amount)}
            <Icon name="arrowRight" size={17} />
          </button>
          <p className="fineprint">فروشگاه نمایشی: کارت هدیه مانند هر قطعهٔ دیگری به سبد افزوده می‌شود و ایمیلی ارسال نمی‌گردد.</p>
        </form>

        <aside className="gift-preview" aria-label="پیش‌نمایش کارت هدیه">
          <div className="gift-card-visual">
            <span className="gift-card-visual__brand">Maison Lumière</span>
            <em>{formatPrice(amount)}</em>
            <span className="gift-card-visual__meta">کارت هدیه · تحویل دیجیتال</span>
            <span className="gift-card-visual__line" />
            <span className="gift-card-visual__note">
              {form.recipient ? `برای ${form.recipient}` : 'برای کسی که خودش انتخاب می‌کند'}
            </span>
          </div>
          <ul className="gift-preview__notes">
            <li><Icon name="lock" size={15} />کد استفادهٔ امن، ارسال‌شده با ایمیل</li>
            <li><Icon name="refresh" size={15} />موجودی تا ۲۴ ماه منقضی نمی‌شود</li>
            <li><Icon name="pin" size={15} />قابل استفاده در پاریس یا آنلاین</li>
          </ul>
          <p className="gift-preview__help">
            مبلغی سفارشی یا کارتی برای هدیهٔ سازمانی می‌خواهید؟ به{' '}
            <a href="mailto:clients@maisonlumiere.com">خدمات مشتریان ما</a> بنویسید.
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
