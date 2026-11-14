import React, { useMemo, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import Icon from '../components/Icon.jsx'
import { categories, collections, faNumber, products } from '../data/catalog.js'

const priceBands = [
  { key: 'under-1000', label: 'زیر ۱٬۰۰۰ دلار', test: (p) => p.price < 1000 },
  { key: '1000-2000', label: '$1,000 – $2,000', test: (p) => p.price >= 1000 && p.price < 2000 },
  { key: '2000-3000', label: '$2,000 – $3,000', test: (p) => p.price >= 2000 && p.price < 3000 },
  { key: '3000-plus', label: '۳٬۰۰۰ دلار و بالاتر', test: (p) => p.price >= 3000 },
]

const sortOptions = [
  { key: 'featured', label: 'منتخب' },
  { key: 'new', label: 'تازه‌ترین‌ها' },
  { key: 'price-asc', label: 'قیمت: کم به زیاد' },
  { key: 'price-desc', label: 'قیمت: زیاد به کم' },
  { key: 'rating', label: 'بیشترین امتیاز' },
]

export default function Shop() {
  const { category: routeCategory } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)

  const activeCategory = searchParams.get('category') || routeCategory || ''
  const activeCollection = searchParams.get('collection') || ''
  const activeBand = searchParams.get('price') || ''
  const sort = searchParams.get('sort') || 'featured'
  const query = searchParams.get('q') || ''

  const update = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    setSearchParams(next)
  }

  const clearAll = () => setSearchParams({})

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = products.filter((product) => {
      if (activeCategory && product.category !== activeCategory) return false
      if (activeCollection && product.collection !== activeCollection) return false
      if (activeBand) {
        const band = priceBands.find((b) => b.key === activeBand)
        if (band && !band.test(product)) return false
      }
      if (q) {
        const haystack = `${product.name} ${product.category} ${product.collection} ${product.blurb} ${product.metal}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })

    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list = [...list].sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
        break
      case 'new':
        list = [...list].sort((a, b) => {
          const score = (p) => (p.badge === 'تازه رسیده' ? 2 : p.badge === 'نسخهٔ محدود' ? 1 : 0)
          return score(b) - score(a)
        })
        break
      default:
        list = [...list].sort((a, b) => {
          const score = (p) => (p.badge ? 1 : 0)
          return score(b) - score(a) || b.rating - a.rating
        })
    }
    return list
  }, [activeCategory, activeCollection, activeBand, query, sort])

  const activeCategoryData = categories.find((c) => c.slug === activeCategory)
  const activeCollectionData = collections.find((c) => c.slug === activeCollection)

  const title = query
    ? `Search: “${query}”`
    : activeCategoryData
      ? activeCategoryData.name
      : activeCollectionData
        ? activeCollectionData.name
        : 'همهٔ مجموعه'

  const description = activeCategoryData
    ? activeCategoryData.tagline
    : activeCollectionData
      ? activeCollectionData.copy
      : 'جواهرات نفیس در طلای بازیافتی ۱۸ عیار و سنگ‌های قابل ردیابی — طراحی در پاریس، ساخت با دست.'

  const chips = [
    activeCategoryData && { key: 'category', label: activeCategoryData.name },
    activeCollectionData && { key: 'collection', label: activeCollectionData.name },
    activeBand && { key: 'price', label: priceBands.find((b) => b.key === activeBand)?.label },
    query && { key: 'q', label: `“${query}”` },
  ].filter(Boolean)

  return (
    <div className="shop">
      <div className="container shop__top">
        <nav className="breadcrumb" aria-label="مسیر صفحه">
          <Link to="/">خانه</Link>
          <span>/</span>
          <Link to="/shop">جواهرات</Link>
          {activeCategoryData && (
            <>
              <span>/</span>
              <span>{activeCategoryData.name}</span>
            </>
          )}
          {activeCollectionData && (
            <>
              <span>/</span>
              <span>{activeCollectionData.name}</span>
            </>
          )}
        </nav>

        <div className="shop__heading">
          <div>
            <p className="eyebrow">جواهرات نفیس</p>
            <h1 className="page-title">{title}</h1>
            <p className="shop__desc">{description}</p>
          </div>
          <p className="shop__count">
            {faNumber(filtered.length)} قطعه
          </p>
        </div>
      </div>

      <div className="container shop__body">
        <button
          className="shop__filter-toggle"
          onClick={() => setFiltersOpen((open) => !open)}
          aria-expanded={filtersOpen}
        >
          <Icon name="filter" size={17} />
          فیلترها
          {chips.length > 0 && <span className="count">{chips.length}</span>}
        </button>

        <aside className={`shop-filters ${filtersOpen ? 'is-open' : ''}`} aria-label="فیلترها">
          <div className="filter-group">
            <p className="filter-title">دسته</p>
            <ul>
              <li>
                <button className={!activeCategory ? 'is-active' : ''} onClick={() => update('category', '')}>همهٔ جواهرات<span>{products.length}</span>
                </button>
              </li>
              {categories.map((category) => (
                <li key={category.slug}>
                  <button
                    className={activeCategory === category.slug ? 'is-active' : ''}
                    onClick={() => update('category', category.slug)}
                  >
                    {category.name}
                    <span>{products.filter((p) => p.category === category.slug).length}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <p className="filter-title">مجموعه</p>
            <ul>
              <li>
                <button className={!activeCollection ? 'is-active' : ''} onClick={() => update('collection', '')}>همهٔ مجموعه‌ها</button>
              </li>
              {collections.map((collection) => (
                <li key={collection.slug}>
                  <button
                    className={activeCollection === collection.slug ? 'is-active' : ''}
                    onClick={() => update('collection', collection.slug)}
                  >
                    {collection.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <p className="filter-title">قیمت</p>
            <ul>
              {priceBands.map((band) => (
                <li key={band.key}>
                  <button
                    className={activeBand === band.key ? 'is-active' : ''}
                    onClick={() => update('price', activeBand === band.key ? '' : band.key)}
                  >
                    {band.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-note">
            <Icon name="sparkle" size={18} />
            <p>هر قطعه شامل سرویس مادام‌العمر و بسته‌بندی امضای ماست.</p>
          </div>
        </aside>

        <div className="shop-results">
          <div className="shop-toolbar">
            <div className="active-chips">
              {chips.map((chip) => (
                <button key={chip.key} className="chip chip--active" onClick={() => update(chip.key, '')}>
                  {chip.label}
                  <Icon name="close" size={12} />
                </button>
              ))}
              {chips.length > 1 && (
                <button className="text-btn" onClick={clearAll}>پاک کردن همه</button>
              )}
            </div>
            <label className="sort-select">
              <span>چیدمان</span>
              <select value={sort} onChange={(e) => update('sort', e.target.value)} aria-label="چیدمان محصولات">
                {sortOptions.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Icon name="chevronDown" size={14} />
            </label>
          </div>

          {filtered.length === 0 ? (
            <div className="shop-empty">
              <Icon name="search" size={30} stroke={1} />
              <h2>قطعه‌ای با این فیلترها هم‌خوان نیست</h2>
              <p>بازهٔ قیمت را بازتر کنید یا همهٔ مجموعه را ببینید.</p>
              <button className="btn btn--outline" onClick={clearAll}>پاک کردن فیلترها</button>
            </div>
          ) : (
            <div className="product-grid product-grid--shop">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} priority={i < 4} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
