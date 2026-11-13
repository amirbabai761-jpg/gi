import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { formatPrice, photo } from '../data/catalog.js'
import { Stars } from './QuickView.jsx'
import { useStore } from '../store/StoreContext.jsx'

export default function ProductCard({ product, priority = false }) {
  const { addToCart, toggleWishlist, isWishlisted, openQuickView } = useStore()

  return (
    <article className="product-card">
      <div className="product-card__media">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <img
            className="product-card__img product-card__img--primary"
            src={photo(product.images[0], 720)}
            alt={product.name}
            loading={priority ? 'eager' : 'lazy'}
          />
          <img
            className="product-card__img product-card__img--secondary"
            src={photo(product.images[1] || product.images[0], 720)}
            alt=""
            loading="lazy"
            aria-hidden="true"
          />
        </Link>

        {product.badge && <span className="badge">{product.badge}</span>}

        <button
          className={`wish-btn ${isWishlisted(product.id) ? 'is-active' : ''}`}
          onClick={() => toggleWishlist(product)}
          aria-label={isWishlisted(product.id) ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          aria-pressed={isWishlisted(product.id)}
        >
          <Icon name="heart" size={17} filled={isWishlisted(product.id)} />
        </button>

        <div className="product-card__tools">
          <button className="tool-btn" onClick={() => openQuickView(product.id)}>
            Quick view
          </button>
          <button
            className="tool-btn tool-btn--icon"
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to bag`}
          >
            <Icon name="bag" size={17} />
          </button>
        </div>
      </div>

      <div className="product-card__body">
        <div className="product-card__head">
          <h3>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>
          <span className="product-card__price">{formatPrice(product.price)}</span>
        </div>
        <p className="product-card__metal">{product.metal}</p>
        <div className="product-card__rating">
          <Stars value={product.rating} />
          <span>{product.reviews}</span>
        </div>
      </div>
    </article>
  )
}
