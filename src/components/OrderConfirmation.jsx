import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { formatPrice } from '../data/catalog.js'

const steps = [
  { title: 'سفارش ثبت شد', copy: 'انتخاب شما روی همین دستگاه ثبت شده است.' },
  { title: 'آماده‌سازی در آتلیه', copy: 'هر قطعه بازبینی، پولیش و با دست بسته‌بندی می‌شود.' },
  { title: 'ارسال بیمه‌شده', copy: 'ردیابی‌پذیر، با امضای تحویل‌گیرنده و رایگان در سراسر جهان.' },
]

export default function OrderConfirmation({ order }) {
  const eta = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="order-confirm">
      <div className="order-confirm__seal">
        <Icon name="check" size={26} stroke={1.1} />
      </div>
      <p className="eyebrow">سفارش ثبت شد</p>
      <h1 className="page-title">Thank you{order.firstName ? `, ${order.firstName}` : ''}.</h1>
      <p className="order-confirm__lede">سفارش شما در این نمایش کامل شد. پرداختی انجام نشد و ایمیلی ارسال نشده — اما همهٔ مراحل، از سبد خرید تا زمان تحویل، دقیقاً همان‌طور است که خواهد بود.</p>

      <div className="order-confirm__meta">
        <div>
          <span>شمارهٔ سفارش</span>
          <strong>{order.number}</strong>
        </div>
        <div>
          <span>زمان تقریبی تحویل</span>
          <strong>{eta}</strong>
        </div>
        <div>
          <span>مبلغ کل</span>
          <strong>{formatPrice(order.total)}</strong>
        </div>
      </div>

      {order.email && (
        <p className="order-confirm__email">
          <Icon name="mail" size={15} /> A receipt would be sent to {order.email}.
        </p>
      )}

      <ul className="order-confirm__lines">
        {order.items.map((item) => (
          <li key={item.key}>
            <span>
              {item.name}
              <em>{item.metal}{item.size ? ` · ${item.size}` : ''} · Qty {item.qty}</em>
            </span>
            <strong>{formatPrice(item.price * item.qty)}</strong>
          </li>
        ))}
      </ul>

      <ol className="order-confirm__steps">
        {steps.map((step, i) => (
          <li key={step.title}>
            <span>0{i + 1}</span>
            <h2>{step.title}</h2>
            <p>{step.copy}</p>
          </li>
        ))}
      </ol>

      <div className="order-confirm__actions">
        <Link className="btn btn--gold" to="/shop">ادامهٔ خرید<Icon name="arrowRight" size={16} />
        </Link>
        <Link className="btn btn--outline" to="/journal">خواندن ژورنال</Link>
      </div>

      <p className="fineprint">فروشگاه نمایشی — محتوای سبد فقط روی همین دستگاه ذخیره می‌شود. هیچ سفارشی ارسال و هیچ کارتی برداشت نشده است.</p>
    </div>
  )
}
