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
    <Overlay open={open} onClose={() => closeUi('cart')} label="کیف خرید">
      <div className="panel-head">
        <div>
          <p className="eyebrow">انتخاب شما</p>
          <h2 className="panel-title">کیف خرید</h2>
        </div>
        <span className="panel-count">
          {cart.reduce((n, l) => n + l.qty, 0)} {cart.reduce((n, l) => n + l.qty, 0) === 1 ? 'item' : 'items'}
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="panel-empty">
          <Icon name="bag" size={34} stroke={0.9} />
          <p>کیف‌تان منتظر چیزی خارق‌العاده است.</p>
          <button
            className="btn btn--dark"
            onClick={() => {
              closeUi('cart')
              navigate('/shop')
            }}
          >کشف مجموعه</button>
        </div>
      ) : (
        <>
          <div className="ship-note">
            {remaining > 0 ? (
              <p>تنها<strong>{formatPrice(remaining)}</strong>تا ارسال خصوصی رایگان باقی مانده.</p>
            ) : (
              <p>
                <Icon name="check" size={15} />ارسال بیمه‌شدهٔ رایگان فعال شد.</p>
            )}
            <div className="ship-note__track">
              <span style={{ width: `${Math.min(100, (subtotal / shippingGoal) * 100)}%` }} />
            </div>
          </div>

          <ul className="cart-lines">
            {cart.map((line) => {
              const product = getProduct(line.id)
              if (!product) return null
              const isGiftCard = product.category === 'gift-cards'
              return (
                <li key={line.key} className="cart-line">
                  {isGiftCard ? (
                    <span className="cart-line__img">
                      <img src={photo(product.images[0], 240)} alt={product.name} loading="lazy" />
                    </span>
                  ) : (
                    <Link to={`/product/${product.id}`} onClick={() => closeUi('cart')} className="cart-line__img">
                      <img src={photo(product.images[0], 240)} alt={product.name} loading="lazy" />
                    </Link>
                  )}
                  <div className="cart-line__body">
                    <div className="cart-line__top">
                      {isGiftCard ? (
                        <span>{product.name}</span>
                      ) : (
                        <Link to={`/product/${product.id}`} onClick={() => closeUi('cart')}>
                          {product.name}
                        </Link>
                      )}
                      <button
                        className="text-btn"
                        onClick={() => {
                          removeLine(line.key)
                          notify(`${product.name} از کیف خرید حذف شد`)
                        }}
                        aria-label={`Remove ${product.name}`}
                      >حذف</button>
                    </div>
                    <p className="cart-line__meta">
                      {line.metal}
                      {line.size ? ` · ${line.size}` : ''}
                    </p>
                    <div className="cart-line__bottom">
                      <div className="stepper" aria-label={`Quantity for ${product.name}`}>
                        <button
                          onClick={() => updateQty(line.key, line.qty - 1)}
                          aria-label="کاهش تعداد"
                        >
                          <Icon name="minus" size={13} />
                        </button>
                        <span>{line.qty}</span>
                        <button
                          onClick={() => updateQty(line.key, Math.min(line.qty + 1, 9))}
                          aria-label="افزایش تعداد"
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
              <span>جمع سبد</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <p className="fineprint">مالیات و عوارض در مرحلهٔ پرداخت محاسبه می‌شود. کادوپیچ رایگان است.</p>
            <button
              className="btn btn--gold btn--block"
              onClick={() => {
                closeUi('cart')
                navigate('/checkout')
              }}
            >ادامهٔ خرید و پرداخت<Icon name="arrowRight" size={17} />
            </button>
            <button className="text-btn panel-foot__continue" onClick={() => closeUi('cart')}>ادامهٔ خرید</button>
          </div>
        </>
      )}
    </Overlay>
  )
}
