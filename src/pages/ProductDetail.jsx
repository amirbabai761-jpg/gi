import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import ProductCard from '../components/ProductCard.jsx'
import SectionHead from '../components/SectionHead.jsx'
import { Stars } from '../components/QuickView.jsx'
import { formatPrice, getProduct, photo, products } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

const reviewerPool = [
  {
    name: 'Isabelle R.',
    date: 'Verified purchase · October 2026',
    rating: 5,
    title: 'Even finer in person',
    body: 'The finish is extraordinary — the setting sits low enough to wear every day and the stone still catches light across a room. The packaging arrived immaculate.',
  },
  {
    name: 'Daniel K.',
    date: 'Verified purchase · September 2026',
    rating: 5,
    title: 'Bought it as an anniversary gift',
    body: 'My wife has not taken it off. The team helped me choose the metal over video and the sizing was perfect. Delivery was insured and arrived two days early.',
  },
  {
    name: 'Priya S.',
    date: 'Verified purchase · August 2026',
    rating: 4,
    title: 'Beautiful, slightly smaller than expected',
    body: 'The craftsmanship is exactly what I hoped for from the photographs. It reads a little finer in person, which I now prefer — it layers beautifully.',
  },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)
  const { addToCart, toggleWishlist, isWishlisted } = useStore()

  const [activeImage, setActiveImage] = useState(0)
  const [metal, setMetal] = useState(product ? product.metal : '')
  const [size, setSize] = useState(product && product.sizes ? product.sizes[0] : '')
  const [qty, setQty] = useState(1)
  const [zoom, setZoom] = useState(false)
  const [pos, setPos] = useState({ x: 50, y: 50 })

  const related = useMemo(() => {
    if (!product) return []
    const sameCategory = products.filter((p) => p.category === product.category && p.id !== product.id)
    const others = products.filter((p) => p.category !== product.category && p.id !== product.id)
    return [...sameCategory, ...others].slice(0, 4)
  }, [product])

  if (!product) {
    return (
      <div className="container section empty-page">
        <p className="eyebrow">Not found</p>
        <h1 className="page-title">This piece has moved</h1>
        <p>It may have sold out or been archived. Explore the current collection instead.</p>
        <Link className="btn btn--gold" to="/shop">
          View the collection
        </Link>
      </div>
    )
  }

  const wishlisted = isWishlisted(product.id)
  const image = photo(product.images[activeImage], 1400)

  return (
    <div className="pdp">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`}>{product.category}</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="pdp-grid">
          <div className="pdp-gallery">
            <div
              className={`pdp-main ${zoom ? 'is-zoomed' : ''}`}
              onMouseEnter={() => setZoom(true)}
              onMouseLeave={() => setZoom(false)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                setPos({
                  x: ((e.clientX - rect.left) / rect.width) * 100,
                  y: ((e.clientY - rect.top) / rect.height) * 100,
                })
              }}
            >
              <img src={image} alt={`${product.name} — view ${activeImage + 1}`} />
              {zoom && (
                <div
                  className="pdp-zoom"
                  style={{ backgroundImage: `url(${image})`, backgroundPosition: `${pos.x}% ${pos.y}%` }}
                  aria-hidden="true"
                />
              )}
              <span className="pdp-zoomhint">
                <Icon name="zoom" size={15} /> Hover to zoom
              </span>
              {product.badge && <span className="badge">{product.badge}</span>}
            </div>

            <div className="pdp-thumbs" role="tablist" aria-label="Product images">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  className={activeImage === i ? 'is-active' : ''}
                  onClick={() => setActiveImage(i)}
                  role="tab"
                  aria-selected={activeImage === i}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={photo(img, 260)} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div className="pdp-info">
            <p className="eyebrow">{product.category}</p>
            <h1 className="pdp-title">{product.name}</h1>
            <div className="pdp-rating">
              <Stars value={product.rating} size={14} />
              <a href="#reviews">
                {product.rating} · {product.reviews} reviews
              </a>
            </div>

            <p className="pdp-price">{formatPrice(product.price)}</p>
            <p className="pdp-blurb">{product.blurb}</p>
            <p className="pdp-desc">{product.description}</p>

            <div className="option-group">
              <div className="option-head">
                <p className="option-label">Metal</p>
                <span className="option-value">{metal}</span>
              </div>
              <div className="chip-row">
                {product.metals.map((m) => (
                  <button
                    key={m}
                    className={`chip chip--select ${metal === m ? 'is-selected' : ''}`}
                    onClick={() => setMetal(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {product.sizes && (
              <div className="option-group">
                <div className="option-head">
                  <p className="option-label">
                    {product.category === 'rings' || product.category === 'bridal' ? 'Ring size' : 'Length'}
                  </p>
                  <Link className="text-btn text-btn--underline" to="/about#sizing">
                    Size guide
                  </Link>
                </div>
                <div className="chip-row">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      className={`chip chip--select ${size === s ? 'is-selected' : ''}`}
                      onClick={() => setSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="pdp-actions">
              <div className="stepper stepper--lg">
                <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity">
                  <Icon name="minus" size={14} />
                </button>
                <span>{qty}</span>
                <button onClick={() => setQty(Math.min(9, qty + 1))} aria-label="Increase quantity">
                  <Icon name="plus" size={14} />
                </button>
              </div>
              <button
                className="btn btn--gold btn--grow"
                onClick={() => addToCart(product, { qty, metal, size })}
              >
                Add to bag — {formatPrice(product.price * qty)}
              </button>
              <button
                className={`icon-btn icon-btn--outline icon-btn--lg ${wishlisted ? 'is-active' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                aria-pressed={wishlisted}
              >
                <Icon name="heart" size={20} filled={wishlisted} />
              </button>
            </div>

            <ul className="pdp-assurance">
              <li><Icon name="truck" size={17} /> Complimentary insured delivery, 2–5 business days</li>
              <li><Icon name="refresh" size={17} /> Free returns within 30 days</li>
              <li><Icon name="gift" size={17} /> Signature packaging & handwritten note included</li>
              <li><Icon name="sparkle" size={17} /> Complimentary engraving and lifetime servicing</li>
            </ul>

            <div className="pdp-accordions">
              <details open>
                <summary>
                  Details & specifications
                  <Icon name="chevronDown" size={16} />
                </summary>
                <dl className="spec-list">
                  {product.specs.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </details>
              <details>
                <summary>
                  Delivery & returns
                  <Icon name="chevronDown" size={16} />
                </summary>
                <p>
                  Every order ships insured and tracked in signature packaging, complimentary worldwide.
                  Paris and EU delivery is typically 2–3 business days; international 3–5. Returns are
                  accepted within 30 days in original condition, with a prepaid label supplied by our
                  client team. Engraved and bespoke pieces are final sale.
                </p>
              </details>
              <details>
                <summary>
                  Care & servicing
                  <Icon name="chevronDown" size={16} />
                </summary>
                <p>
                  Store your piece separately in its case and avoid perfume and chlorine. We offer
                  complimentary cleaning and inspection for the lifetime of the piece, plus restoration
                  and resizing at cost. Contact client services to arrange a service.
                </p>
              </details>
            </div>
          </div>
        </div>

        <section className="pdp-reviews" id="reviews">
          <div className="reviews-summary">
            <p className="eyebrow">Client reviews</p>
            <div className="reviews-score">
              <strong>{product.rating.toFixed(1)}</strong>
              <div>
                <Stars value={product.rating} size={15} />
                <span>{product.reviews} verified reviews</span>
              </div>
            </div>
            <div className="reviews-bars">
              {[5, 4, 3, 2, 1].map((star) => {
                const width =
                  star === 5 ? 82 : star === 4 ? 14 : star === 3 ? 3 : star === 2 ? 1 : 0
                return (
                  <div key={star} className="reviews-bar">
                    <span>{star}</span>
                    <div><i style={{ width: `${width}%` }} /></div>
                    <span>{width}%</span>
                  </div>
                )
              })}
            </div>
          </div>

          <ul className="review-list">
            {reviewerPool.map((review) => (
              <li key={review.name} className="review">
                <div className="review__head">
                  <strong>{review.title}</strong>
                  <Stars value={review.rating} size={12} />
                </div>
                <p className="review__body">{review.body}</p>
                <p className="review__meta">
                  {review.name} · {review.date}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section pdp-related">
          <SectionHead eyebrow="Complete the look" title="You May Also Love" link="/shop" linkLabel="View all" />
          <div className="product-grid">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>

      <div className="pdp-sticky">
        <div>
          <span>{product.name}</span>
          <strong>{formatPrice(product.price)}</strong>
        </div>
        <button className="btn btn--gold btn--sm" onClick={() => addToCart(product, { qty, metal, size })}>
          Add to bag
        </button>
      </div>
    </div>
  )
}
