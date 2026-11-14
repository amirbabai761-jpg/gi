import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Overlay from './Overlay.jsx'
import Icon from './Icon.jsx'
import { faNumber, formatPrice, getProduct, photo } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

export default function QuickView() {
  const { ui, closeUi, addToCart, toggleWishlist, isWishlisted, openCart } = useStore()
  const product = ui.quickView ? getProduct(ui.quickView) : null
  const [metal, setMetal] = useState(null)
  const [size, setSize] = useState(null)
  const [qty, setQty] = useState(1)

  const activeMetal = metal || (product ? product.metal : '')
  const activeSize = size || (product && product.sizes ? product.sizes[0] : '')

  const reset = () => {
    setMetal(null)
    setSize(null)
    setQty(1)
  }

  return (
    <Overlay
      open={Boolean(product)}
      onClose={() => {
        closeUi('quickView')
        reset()
      }}
      variant="modal"
      label={product ? `${product.name} quick view` : 'نمای سریع'}
      className="quickview-overlay"
    >
      {product && (
        <div className="quickview">
          <div className="quickview__media">
            <img src={photo(product.images[0], 900)} alt={product.name} />
            {product.badge && <span className="badge">{product.badge}</span>}
          </div>
          <div className="quickview__body">
            <p className="eyebrow">{product.category}</p>
            <h2>{product.name}</h2>
            <div className="rating">
              <Stars value={product.rating} />
              <span>
                {faNumber(product.rating)} · {faNumber(product.reviews)} نظر
              </span>
            </div>
            <p className="quickview__price">{formatPrice(product.price)}</p>
            <p className="quickview__blurb">{product.blurb}</p>

            <div className="option-group">
              <p className="option-label">فلز</p>
              <div className="chip-row">
                {product.metals.map((m) => (
                  <button
                    key={m}
                    className={`chip chip--select ${activeMetal === m ? 'is-selected' : ''}`}
                    onClick={() => setMetal(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {product.sizes && (
              <div className="option-group">
                <p className="option-label">{product.category === 'rings' || product.category === 'bridal' ? 'سایز انگشتر' : 'طول'}</p>
                <div className="chip-row">
                  {product.sizes.slice(0, 6).map((s) => (
                    <button
                      key={s}
                      className={`chip chip--select ${activeSize === s ? 'is-selected' : ''}`}
                      onClick={() => setSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="quickview__actions">
              <div className="stepper">
                <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="کاهش تعداد">
                  <Icon name="minus" size={13} />
                </button>
                <span>{qty}</span>
                <button onClick={() => setQty(Math.min(9, qty + 1))} aria-label="افزایش تعداد">
                  <Icon name="plus" size={13} />
                </button>
              </div>
              <button
                className="btn btn--gold"
                onClick={() => {
                  addToCart(product, { qty, metal: activeMetal, size: activeSize })
                  closeUi('quickView')
                  openCart()
                  reset()
                }}
              >افزودن به کیف</button>
              <button
                className={`icon-btn icon-btn--outline ${isWishlisted(product.id) ? 'is-active' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label="افزودن به علاقه‌مندی‌ها"
                aria-pressed={isWishlisted(product.id)}
              >
                <Icon name="heart" size={18} filled={isWishlisted(product.id)} />
              </button>
            </div>

            <Link className="text-btn quickview__link" to={`/product/${product.id}`} onClick={() => closeUi('quickView')}>مشاهدهٔ جزئیات کامل<Icon name="arrowRight" size={15} />
            </Link>
          </div>
        </div>
      )}
    </Overlay>
  )
}

export function Stars({ value, size = 12 }) {
  return (
    <span className="stars" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Icon
          key={i}
          name="star"
          size={size}
          stroke={1}
          filled={value >= i - 0.25}
          className={value >= i - 0.25 ? 'is-filled' : 'is-empty'}
        />
      ))}
    </span>
  )
}
