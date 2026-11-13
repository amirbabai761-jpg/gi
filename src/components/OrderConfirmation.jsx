import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { formatPrice } from '../data/catalog.js'

const steps = [
  { title: 'Order noted', copy: 'Your selection is recorded on this device.' },
  { title: 'Prepared in the atelier', copy: 'Each piece is checked, polished and wrapped by hand.' },
  { title: 'Insured delivery', copy: 'Tracked, signature required, complimentary worldwide.' },
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
      <p className="eyebrow">Order noted</p>
      <h1 className="page-title">Thank you{order.firstName ? `, ${order.firstName}` : ''}.</h1>
      <p className="order-confirm__lede">
        Your order is complete for this demonstration. No payment was taken and no confirmation email was
        sent — but every step of the experience, from bag to delivery estimate, is exactly as it would be.
      </p>

      <div className="order-confirm__meta">
        <div>
          <span>Order number</span>
          <strong>{order.number}</strong>
        </div>
        <div>
          <span>Estimated arrival</span>
          <strong>{eta}</strong>
        </div>
        <div>
          <span>Total</span>
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
        <Link className="btn btn--gold" to="/shop">
          Continue shopping
          <Icon name="arrowRight" size={16} />
        </Link>
        <Link className="btn btn--outline" to="/journal">
          Read the journal
        </Link>
      </div>

      <p className="fineprint">
        Demonstration storefront — cart contents are saved on this device only. No order has been
        transmitted and no card was charged.
      </p>
    </div>
  )
}
