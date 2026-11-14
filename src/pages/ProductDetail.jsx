import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import ProductCard from '../components/ProductCard.jsx'
import SectionHead from '../components/SectionHead.jsx'
import { Stars } from '../components/QuickView.jsx'
import { categories, faNumber, formatPrice, getProduct, photo, products } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

const reviewerPool = [
  {
    name: 'ایزابل ر.',
    date: 'خرید تأییدشده · اکتبر ۲۰۲۶',
    rating: 5,
    title: 'از نزدیک حتی ظریف‌تر',
    body: 'پرداخت بی‌نظیر است — نگین‌بندی آن‌قدر پایین می‌نشیند که هر روز بتوان پوشید و سنگ هنوز از آن سوی اتاق نور می‌گیرد. بسته‌بندی بی‌عیب رسید.',
  },
  {
    name: 'دانیل ک.',
    date: 'خرید تأییدشده · سپتامبر ۲۰۲۶',
    rating: 5,
    title: 'به‌عنوان هدیهٔ سالگرد خریدم',
    body: 'همسرم آن را درنیاورده است. تیم در انتخاب فلز از طریق ویدئو کمکم کرد و اندازه دقیقاً درست بود. ارسال بیمه شد و دو روز زودتر رسید.',
  },
  {
    name: 'پریا س.',
    date: 'خرید تأییدشده · اوت ۲۰۲۶',
    rating: 4,
    title: 'زیبا، کمی کوچک‌تر از انتظار',
    body: 'هنر ساخت دقیقاً همان است که از عکس‌ها انتظار داشتم. از نزدیک کمی ظریف‌تر دیده می‌شود که حالا بیشتر دوستش دارم — در لایه‌ها زیبا می‌نشیند.',
  },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)
  const categoryName = product
    ? categories.find((c) => c.slug === product.category)?.name || product.category
    : ''
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
        <p className="eyebrow">یافت نشد</p>
        <h1 className="page-title">این قطعه جابه‌جا شده</h1>
        <p>شاید فروش رفته یا بایگانی شده باشد. مجموعهٔ کنونی را ببینید.</p>
        <Link className="btn btn--gold" to="/shop">دیدن مجموعه</Link>
      </div>
    )
  }

  const wishlisted = isWishlisted(product.id)
  const image = photo(product.images[activeImage], 1400)

  return (
    <div className="pdp">
      <div className="container">
        <nav className="breadcrumb" aria-label="مسیر صفحه">
          <Link to="/">خانه</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`}>{categoryName}</Link>
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
                <Icon name="zoom" size={15} />برای بزرگ‌نمایی نگه دارید</span>
              {product.badge && <span className="badge">{product.badge}</span>}
            </div>

            <div className="pdp-thumbs" role="tablist" aria-label="تصویرهای محصول">
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
            <p className="eyebrow">{categoryName}</p>
            <h1 className="pdp-title">{product.name}</h1>
            <div className="pdp-rating">
              <Stars value={product.rating} size={14} />
              <a href="#reviews">
                {faNumber(product.rating)} · {faNumber(product.reviews)} نظر
              </a>
            </div>

            <p className="pdp-price">{formatPrice(product.price)}</p>
            <p className="pdp-blurb">{product.blurb}</p>
            <p className="pdp-desc">{product.description}</p>

            <div className="option-group">
              <div className="option-head">
                <p className="option-label">فلز</p>
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
                    {product.category === 'rings' || product.category === 'bridal' ? 'سایز انگشتر' : 'طول'}
                  </p>
                  <Link className="text-btn text-btn--underline" to="/about#sizing">راهنمای اندازه</Link>
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
                <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="کاهش تعداد">
                  <Icon name="minus" size={14} />
                </button>
                <span>{qty}</span>
                <button onClick={() => setQty(Math.min(9, qty + 1))} aria-label="افزایش تعداد">
                  <Icon name="plus" size={14} />
                </button>
              </div>
              <button
                className="btn btn--gold btn--grow"
                onClick={() => addToCart(product, { qty, metal, size })}
              >
                افزودن به کیف — {formatPrice(product.price * qty)}
              </button>
              <button
                className={`icon-btn icon-btn--outline icon-btn--lg ${wishlisted ? 'is-active' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label={wishlisted ? 'Remove from wishlist' : 'افزودن به علاقه‌مندی‌ها'}
                aria-pressed={wishlisted}
              >
                <Icon name="heart" size={20} filled={wishlisted} />
              </button>
            </div>

            <ul className="pdp-assurance">
              <li><Icon name="truck" size={17} />ارسال بیمه‌شدهٔ رایگان، ۲ تا ۵ روز کاری</li>
              <li><Icon name="refresh" size={17} />مرجوعی رایگان تا ۳۰ روز</li>
              <li><Icon name="gift" size={17} />بسته‌بندی امضا و یادداشت دست‌نویس همراه است</li>
              <li><Icon name="sparkle" size={17} />حکاکی رایگان و سرویس مادام‌العمر</li>
            </ul>

            <div className="pdp-accordions">
              <details open>
                <summary>جزئیات و مشخصات<Icon name="chevronDown" size={16} />
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
                <summary>ارسال و مرجوعی<Icon name="chevronDown" size={16} />
                </summary>
                <p>هر سفارش بیمه و ردیابی می‌شود و در بسته‌بندی امضا و به‌صورت رایگان به سراسر جهان می‌رود. تحویل در پاریس و اتحادیهٔ اروپا معمولاً ۲ تا ۳ روز کاری و بین‌المللی ۳ تا ۵ روز است. مرجوعی تا ۳۰ روز در وضعیت اولیه، با برچسب پیش‌پرداخت‌شدهٔ تیم مشتریان پذیرفته می‌شود. قطعه‌های حکاکی‌شده و سفارشی فروش قطعی دارند.</p>
              </details>
              <details>
                <summary>نگهداری و سرویس<Icon name="chevronDown" size={16} />
                </summary>
                <p>قطعه‌تان را جداگانه در جعبهٔ خودش نگه دارید و از عطر و کلر دور بدارید. تمیزکاری و بازبینی رایگان برای تمام عمر قطعه ارائه می‌دهیم، و بازسازی و تغییر اندازه با قیمت تمام‌شده. برای هماهنگی با خدمات مشتریان تماس بگیرید.</p>
              </details>
            </div>
          </div>
        </div>

        <section className="pdp-reviews" id="reviews">
          <div className="reviews-summary">
            <p className="eyebrow">نظر مشتریان</p>
            <div className="reviews-score">
              <strong>{product.rating.toFixed(1)}</strong>
              <div>
                <Stars value={product.rating} size={15} />
                <span>{faNumber(product.reviews)} نظر تأییدشده</span>
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
          <SectionHead eyebrow="کامل کردن استایل" title="شاید این‌ها را هم بخواهید" link="/shop" linkLabel="دیدن همه" />
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
        <button className="btn btn--gold btn--sm" onClick={() => addToCart(product, { qty, metal, size })}>افزودن به کیف</button>
      </div>
    </div>
  )
}
