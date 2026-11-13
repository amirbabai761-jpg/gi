import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Overlay from './Overlay.jsx'
import Icon from './Icon.jsx'
import { categories, formatPrice, photo, products } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

const suggestions = ['Diamond', 'Pearl', 'Gold hoops', 'Bridal', 'Signet']

export default function SearchOverlay() {
  const { ui, closeUi } = useStore()
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.includes(q) ||
          p.collection.replace(/-/g, ' ').includes(q) ||
          p.blurb.toLowerCase().includes(q)
      )
      .slice(0, 5)
  }, [query])

  return (
    <Overlay open={ui.search} onClose={() => closeUi('search')} variant="search" label="Search the collection">
      <div className="search-panel">
        <label className="search-field">
          <Icon name="search" size={20} />
          <input
            type="search"
            placeholder="Search rings, necklaces, collections…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            aria-label="Search products"
          />
          <span className="search-field__hint">ESC to close</span>
        </label>

        {!query && (
          <div className="search-suggest">
            <div>
              <p className="eyebrow">Popular searches</p>
              <div className="chip-row">
                {suggestions.map((s) => (
                  <button key={s} className="chip" onClick={() => setQuery(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">Browse</p>
              <div className="chip-row">
                {categories.map((c) => (
                  <Link key={c.slug} className="chip" to={`/shop?category=${c.slug}`} onClick={() => closeUi('search')}>
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {query && (
          <div className="search-results">
            <p className="search-results__count">
              {results.length} {results.length === 1 ? 'piece' : 'pieces'} for “{query}”
            </p>
            {results.length === 0 ? (
              <p className="search-empty">
                Nothing matched that search. Try “diamond”, “pearl” or browse the full collection.
              </p>
            ) : (
              <ul>
                {results.map((product) => (
                  <li key={product.id}>
                    <Link to={`/product/${product.id}`} onClick={() => closeUi('search')}>
                      <img src={photo(product.images[0], 180)} alt="" loading="lazy" />
                      <span className="search-results__name">
                        {product.name}
                        <em>{product.category}</em>
                      </span>
                      <span className="search-results__price">{formatPrice(product.price)}</span>
                      <Icon name="arrowRight" size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <Link className="btn btn--outline search-results__all" to={`/shop?q=${encodeURIComponent(query)}`} onClick={() => closeUi('search')}>
              See all results
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        )}
      </div>
    </Overlay>
  )
}
