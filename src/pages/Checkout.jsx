import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { formatPrice, getProduct, photo } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

export default function Checkout() {
  const { cart, subtotal, notify, updateQty, removeLine } = useStore()
  const [placing, setPlacing] = useState(false)
  const shipping = subtotal >= 1500 || subtotal === 0 ? 0 : 25
  const total = subtotal + shipping

  return (
    <div className="container checkout">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Checkout</span>
      </nav>

      <header className="checkout__head">
        <p className="eyebrow">Secure checkout</p>
        <h1 className="page-title">Complete Your Order</h1>
      </header>

      <div className="demo-note">
        <Icon name="sparkle" size={18} />
        <p>
          <strong>This is a demonstration storefront.</strong> No payment is processed and no order is
          placed. Cart contents are saved on this device only.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="shop-empty">
          <Icon name="bag" size={30} stroke={1} />
          <h2>Your bag is empty</h2>
          <p>Add a piece to see the checkout experience.</p>
          <Link className="btn btn--gold" to="/shop">Explore the collection</Link>
        </div>
      ) : (
        <div className="checkout__grid">
          <form
            className="checkout__form"
            onSubmit={(e) => {
              e.preventDefault()
              setPlacing(true)
              notify('Demo checkout complete — no payment was taken and no order was placed.')
              setTimeout(() => setPlacing(false), 1200)
            }}
          >
            <section>
              <h2>Contact</h2>
              <div className="form-row">
                <label className="field">
                  <span>First name</span>
                  <input required placeholder="First name" />
                </label>
                <label className="field">
                  <span>Last name</span>
                  <input required placeholder="Last name" />
                </label>
              </div>
              <label className="field">
                <span>Email</span>
                <input type="email" required placeholder="you@example.com" />
              </label>
              <label className="field">
                <span>Phone (for delivery)</span>
                <input type="tel" placeholder="+33 6 00 00 00 00" />
              </label>
            </section>

            <section>
              <h2>Delivery</h2>
              <label className="field">
                <span>Address</span>
                <input required placeholder="Street and number" />
              </label>
              <div className="form-row">
                <label className="field">
                  <span>City</span>
                  <input required placeholder="City" />
                </label>
                <label className="field">
                  <span>Postal code</span>
                  <input required placeholder="75002" />
                </label>
              </div>
              <label className="field">
                <span>Country</span>
                <select defaultValue="France">
                  <option>France</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>United States</option>
                  <option>United Arab Emirates</option>
                  <option>Japan</option>
                </select>
              </label>
              <label className="field">
                <span>Gift note (optional)</span>
                <textarea rows="2" placeholder="We will write this on our handwritten card." />
              </label>
            </section>

            <section>
              <h2>Payment</h2>
              <div className="payment-placeholder">
                <Icon name="lock" size={18} />
                <p>
                  Card and wallet payments are not connected in this demo. In production this step would
                  open a secure, PCI-compliant payment sheet.
                </p>
              </div>
            </section>

            <button className="btn btn--gold btn--block btn--lg" type="submit" disabled={placing}>
              {placing ? 'Processing…' : `Place demo order — ${formatPrice(total)}`}
              <Icon name="arrowRight" size={17} />
            </button>
            <p className="fineprint">
              Demo only: no charge, no order, no data leaves this browser. By continuing you agree to our
              terms and privacy policy.
            </p>
          </form>

          <aside className="checkout__summary">
            <h2>Order summary</h2>
            <ul className="checkout-lines">
              {cart.map((line) => {
                const product = getProduct(line.id)
                if (!product) return null
                return (
                  <li key={line.key}>
                    <img src={photo(product.images[0], 200)} alt="" />
                    <div>
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                      <p>{line.metal}{line.size ? ` · ${line.size}` : ''}</p>
                      <div className="checkout-lines__qty">
                        <button onClick={() => updateQty(line.key, line.qty - 1)} aria-label="Decrease quantity">
                          <Icon name="minus" size={12} />
                        </button>
                        <span>{line.qty}</span>
                        <button onClick={() => updateQty(line.key, line.qty + 1)} aria-label="Increase quantity">
                          <Icon name="plus" size={12} />
                        </button>
                        <button className="text-btn checkout-lines__remove" onClick={() => removeLine(line.key)}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <strong>{formatPrice(product.price * line.qty)}</strong>
                  </li>
                )
              })}
            </ul>

            <div className="summary-rows">
              <div><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
              <div><span>Insured delivery</span><span>{shipping === 0 ? 'Complimentary' : formatPrice(shipping)}</span></div>
              <div><span>Duties & taxes</span><span>Calculated at checkout</span></div>
              <div className="summary-total"><span>Total</span><strong>{formatPrice(total)}</strong></div>
            </div>

            <ul className="summary-trust">
              <li><Icon name="lock" size={15} /> Secure, encrypted checkout</li>
              <li><Icon name="truck" size={15} /> Insured signature delivery</li>
              <li><Icon name="refresh" size={15} /> 30-day returns</li>
            </ul>
          </aside>
        </div>
      )}
    </div>
  )
}
