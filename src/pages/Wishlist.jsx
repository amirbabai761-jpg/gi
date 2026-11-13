import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { getProduct, products } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

export default function Wishlist() {
  const { wishlist } = useStore()
  const saved = wishlist.map(getProduct).filter(Boolean)
  const suggestions = products.filter((p) => !wishlist.includes(p.id)).slice(0, 4)

  return (
    <div className="container wishlist">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Wishlist</span>
      </nav>

      <div className="shop__heading">
        <div>
          <p className="eyebrow">Saved for later</p>
          <h1 className="page-title">Your Wishlist</h1>
          <p className="shop__desc">
            Pieces you have set aside. Saved on this device, so they will be here when you return.
          </p>
        </div>
        <p className="shop__count">
          {saved.length} {saved.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      {saved.length === 0 ? (
        <div className="shop-empty wishlist__empty">
          <Icon name="heart" size={32} stroke={1} />
          <h2>Nothing saved yet</h2>
          <p>Tap the heart on any piece to keep it here while you decide.</p>
          <Link className="btn btn--gold" to="/shop">
            Browse the collection
            <Icon name="arrowRight" size={16} />
          </Link>
        </div>
      ) : (
        <div className="product-grid">
          {saved.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <section className="section">
        <div className="section-head section-head--left">
          <div>
            <p className="eyebrow">Perhaps also</p>
            <h2 className="section-title section-title--sm">Pieces to Consider</h2>
          </div>
          <Link className="link-arrow" to="/shop">
            Shop all
            <Icon name="arrowRight" size={16} />
          </Link>
        </div>
        <div className="product-grid product-grid--four">
          {suggestions.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
