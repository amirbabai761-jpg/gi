import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Overlay from './Overlay.jsx'
import Icon from './Icon.jsx'
import { formatPrice, getProduct, photo } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

export default function CartDrawer() {
  const { ui, closeUi, cart, subtotal, updateQty, removeLine, notify } = useStore()
  const navigate = useNavigate()
  const open = ui.cart
  const shippingGoal = 1500
  const remaining = Math.max(0, shippingGoal - subtotal)

  return (
    <Overlay open={open} onClose={() => closeUi('cart')} label="Shopping bag">
      <div className="panel-head">
        <div>
          <p className="eyebrow">Your selection</p>
          <h2 className="panel-title">Shopping Bag</h2>
        </div>
        <span className="panel-count">
          {cart.reduce((n, l) => n + l.qty, 0)} {cart.reduce((n, l) => n + l.qty, 0) === 1 ? 'item' : 'items'}
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="panel-empty">
          <Icon name="bag" size={34} stroke={0.9} />
          <p>Your bag is waiting for something extraordinary.</p>
          <button
            className="btn btn--dark"
            onClick={() => {
              closeUi('cart')
              navigate('/shop')
            }}
          >
            Explore the collection
          </button>
        </div>
      ) : (
        <>
          <div className="ship-note">
            {remaining > 0 ? (
              <p>
                You are <strong>{formatPrice(remaining)}</strong> from complimentary private courier delivery.
              </p>
            ) : (
              <p>
                <Icon name="check" size={15} /> Complimentary insured delivery unlocked.
              </p>
            )}
            <div className="ship-note__track">
              <span style={{ width: `${Math.min(100, (subtotal / shippingGoal) * 100)}%` }} />
            </div>
          </div>

          <ul className="cart-lines">
            {cart.map((line) => {
              const product = getProduct(line.id)
              if (!product) return null
              return (
                <li key={line.key} className="cart-line">
                  <Link to={`/product/${product.id}`} onClick={() => closeUi('cart')} className="cart-line__img">
                    <img src={photo(product.images[0], 240)} alt={product.name} loading="lazy" />
                  </Link>
                  <div className="cart-line__body">
                    <div className="cart-line__top">
                      <Link to={`/product/${product.id}`} onClick={() => closeUi('cart')}>
                        {product.name}
                      </Link>
                      <button
                        className="text-btn"
                        onClick={() => {
                          removeLine(line.key)
                          notify(`${product.name} removed from your bag`)
                        }}
                        aria-label={`Remove ${product.name}`}
                      >
                        Remove
                      </button>
                    </div>
                    <p className="cart-line__meta">
                      {line.metal}
                      {line.size ? ` · ${line.size}` : ''}
                    </p>
                    <div className="cart-line__bottom">
                      <div className="stepper" aria-label={`Quantity for ${product.name}`}>
                        <button
                          onClick={() => updateQty(line.key, line.qty - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Icon name="minus" size={13} />
                        </button>
                        <span>{line.qty}</span>
                        <button
                          onClick={() => updateQty(line.key, Math.min(line.qty + 1, 9))}
                          aria-label="Increase quantity"
                        >
                          <Icon name="plus" size={13} />
                        </button>
                      </div>
                      <span className="cart-line__price">{formatPrice(product.price * line.qty)}</span>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="panel-foot">
            <div className="subtotal">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <p className="fineprint">Taxes and duties calculated at checkout. Gift wrapping included.</p>
            <button
              className="btn btn--gold btn--block"
              onClick={() => {
                closeUi('cart')
                navigate('/checkout')
              }}
            >
              Proceed to checkout
              <Icon name="arrowRight" size={17} />
            </button>
            <button className="text-btn panel-foot__continue" onClick={() => closeUi('cart')}>
              Continue shopping
            </button>
          </div>
        </>
      )}
    </Overlay>
  )
}
