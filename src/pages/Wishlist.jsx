import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { faNumber, getProduct, products } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

export default function Wishlist() {
  const { wishlist } = useStore()
  const saved = wishlist.map(getProduct).filter(Boolean)
  const suggestions = products.filter((p) => !wishlist.includes(p.id)).slice(0, 4)

  return (
    <div className="container wishlist">
      <nav className="breadcrumb" aria-label="مسیر صفحه">
        <Link to="/">خانه</Link>
        <span>/</span>
        <span>علاقه‌مندی‌ها</span>
      </nav>

      <div className="shop__heading">
        <div>
          <p className="eyebrow">ذخیره‌شده برای بعد</p>
          <h1 className="page-title">علاقه‌مندی‌های شما</h1>
          <p className="shop__desc">قطعه‌هایی که کنار گذاشته‌اید. روی همین دستگاه ذخیره می‌شوند، پس وقتی برگردید همین‌جا هستند.</p>
        </div>
        <p className="shop__count">
          {faNumber(saved.length)} قطعه
        </p>
      </div>

      {saved.length === 0 ? (
        <div className="shop-empty wishlist__empty">
          <Icon name="heart" size={32} stroke={1} />
          <h2>هنوز چیزی ذخیره نشده</h2>
          <p>روی قلب کنار هر قطعه بزنید تا تا زمان تصمیم‌گیری همین‌جا بماند.</p>
          <Link className="btn btn--gold" to="/shop">مرور مجموعه<Icon name="arrowRight" size={16} />
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
            <p className="eyebrow">شاید این‌ها هم</p>
            <h2 className="section-title section-title--sm">قطعه‌هایی برای بررسی</h2>
          </div>
          <Link className="link-arrow" to="/shop">همهٔ محصولات<Icon name="arrowRight" size={16} />
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
