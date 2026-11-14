import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import { categories, collections, getProduct, photo } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

const navItems = [
  { label: 'تازه‌ها', to: '/shop?sort=new' },
  { label: 'مجموعه‌ها', mega: 'collections' },
  { label: 'جواهرات', mega: 'jewelry' },
  { label: 'نامزدی و عروس', to: '/shop?category=bridal' },
  { label: 'هدایا', mega: 'gifts' },
  { label: 'دربارهٔ ما', to: '/about' },
]

const giftEdits = [
  { label: 'زیر ۱٬۰۰۰ دلار', to: '/shop?max=1000' },
  { label: 'زیر ۲٬۵۰۰ دلار', to: '/shop?max=2500' },
  { label: 'انتخاب سالگرد', to: '/shop?collection=modern-heirlooms' },
  { label: 'مروارید و سنگ ماه', to: '/shop?sort=new' },
  { label: 'کارت هدیه', to: '/gift-cards' },
]

const announcements = [
  'ارسال بیمه‌شدهٔ رایگان برای همهٔ سفارش‌ها',
  'لوکس اخلاقی، با ساخت بی‌نقص',
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mega, setMega] = useState(null)
  const [announcement, setAnnouncement] = useState(0)
  const closeTimer = useRef(null)
  const { cartCount, wishlist, openCart, openSearch, openMenu, openAccount } = useStore()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setAnnouncement((i) => (i + 1) % announcements.length), 6000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMega(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openMega = (key) => {
    clearTimeout(closeTimer.current)
    setMega(key)
  }
  const scheduleClose = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMega(null), 160)
  }

  return (
    <header
      className={`site-header ${scrolled ? 'is-scrolled' : ''} ${
        pathname === '/' && !scrolled ? 'is-transparent' : ''
      }`}
    >
      <div className="announcement">
        <div className="container announcement__inner">
          <div className="announcement__messages" aria-live="off">
            {announcements.map((message, i) => (
              <span key={message} className={i === announcement ? 'is-active' : ''}>
                {message}
              </span>
            ))}
          </div>
          <span className="announcement__note">پاریس · از ۱۹۸۷</span>
          <Link className="announcement__link" to="/about#appointment">رزرو وقت مشاوره</Link>
        </div>
      </div>

      <div
        className="nav-shell"
        onMouseLeave={scheduleClose}
      >
        <div className="container nav-inner">
          <button className="icon-btn nav-burger" aria-label="باز کردن منو" onClick={openMenu}>
            <Icon name="menu" size={22} />
          </button>

          <Link className="brand" to="/" aria-label="Maison Lumière — home">
            <span className="brand__mark">
              <Icon name="diamond" size={18} stroke={1} />
            </span>
            <span className="brand__text">
              <span className="brand__name">Maison Lumière</span>
              <span className="brand__sub">جواهرات نفیس</span>
            </span>
          </Link>

          <nav className="primary-nav" aria-label="اصلی">
            <ul>
              {navItems.map((item) =>
                item.mega ? (
                  <li key={item.label} className="has-mega">
                    <button
                      className={`nav-link ${mega === item.mega ? 'is-active' : ''}`}
                      aria-expanded={mega === item.mega}
                      aria-haspopup="true"
                      onMouseEnter={() => openMega(item.mega)}
                      onFocus={() => openMega(item.mega)}
                      onClick={() => setMega(mega === item.mega ? null : item.mega)}
                    >
                      {item.label}
                      <Icon name="chevronDown" size={13} stroke={1.4} />
                    </button>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link className="nav-link" to={item.to} onClick={() => setMega(null)}>
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="nav-actions">
            <button className="icon-btn" aria-label="جست‌وجو" onClick={openSearch}>
              <Icon name="search" size={19} />
            </button>
            <button className="icon-btn icon-btn--hide-sm" aria-label="حساب کاربری" onClick={openAccount}>
              <Icon name="user" size={19} />
            </button>
            <Link className="icon-btn icon-btn--hide-sm" to="/wishlist" aria-label={`Wishlist, ${wishlist.length} items`}>
              <Icon name="heart" size={19} />
              {wishlist.length > 0 && <span className="count">{wishlist.length}</span>}
            </Link>
            <button className="icon-btn" aria-label={`Shopping bag, ${cartCount} items`} onClick={openCart}>
              <Icon name="bag" size={19} />
              {cartCount > 0 && <span className="count">{cartCount}</span>}
            </button>
            <Link className="btn btn--gold btn--sm nav-consult" to="/about#appointment">مشاورهٔ خصوصی</Link>
          </div>
        </div>

        {mega && (
          <MegaPanel panel={mega} onNavigate={() => setMega(null)} onKeepOpen={() => clearTimeout(closeTimer.current)} onClose={scheduleClose} />
        )}
      </div>
    </header>
  )
}

function MegaPanel({ panel, onNavigate, onKeepOpen, onClose }) {
  const content = {
    jewelry: {
      eyebrow: 'خرید بر اساس دسته',
      links: categories.map((c) => ({ label: c.name, to: `/shop?category=${c.slug}` })),
      columns: [
        {
          title: 'فلز و سنگ',
          links: [
            { label: 'طلای زرد', to: '/shop?sort=price-asc' },
            { label: 'طلای سفید', to: '/shop?sort=price-desc' },
            { label: 'مروارید', to: '/shop?q=pearl' },
            { label: 'الماس', to: '/shop?q=diamond' },
          ],
        },
      ],
      feature: { image: '1599643478518-a784e5dc4c8f', label: 'رنگ ظرافت', to: '/shop?collection=color-of-elegance' },
    },
    collections: {
      eyebrow: 'مجموعه‌های ما',
      links: collections.map((c) => ({ label: c.name, to: `/shop?collection=${c.slug}` })),
      columns: [
        {
          title: 'انتخاب‌ها',
          links: [
            { label: 'تازه‌ها', to: '/shop?sort=new' },
            { label: 'پرفروش‌ها', to: '/shop?sort=featured' },
            { label: 'نسخهٔ محدود', to: '/shop?q=limited' },
            { label: 'عروس', to: '/shop?category=bridal' },
          ],
        },
      ],
      feature: { image: '1616837874254-8d5aaa63e273', label: 'یادگارهای مدرن', to: '/shop?collection=modern-heirlooms' },
    },
    gifts: {
      eyebrow: 'انتخاب هدیه',
      links: giftEdits,
      columns: [
        {
          title: 'برای کسی خاص',
          links: [
            { label: 'برای او', to: '/shop' },
            { label: 'سالگرد', to: '/shop?collection=forever-begins-here' },
            { label: 'لوکس‌های روزمره', to: '/shop?collection=everyday-essentials' },
            { label: 'بسته‌بندی امضا', to: '/about#packaging' },
          ],
        },
      ],
      feature: { image: '1515562141207-7a88fb7ce338', label: 'کادوپیچ و یادداشت', to: '/about#packaging' },
    },
  }[panel]

  const featured = getProduct('sersaphine-pendant')

  return (
    <div className="mega" onMouseEnter={onKeepOpen} onMouseLeave={onClose}>
      <div className="container mega__inner">
        <div className="mega__intro">
          <p className="eyebrow">{content.eyebrow}</p>
          <ul className="mega__list">
            {content.links.map((link) => (
              <li key={link.label}>
                <Link to={link.to} onClick={onNavigate}>
                  {link.label}
                  <Icon name="arrowRight" size={15} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {content.columns.map((column) => (
          <div className="mega__column" key={column.title}>
            <p className="mega__column-title">{column.title}</p>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} onClick={onNavigate}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Link className="mega__feature" to={content.feature.to} onClick={onNavigate}>
          <img src={photo(content.feature.image, 640)} alt="" loading="lazy" />
          <span>{content.feature.label}</span>
          <Icon name="arrowRight" size={16} />
        </Link>
        {featured && (
          <Link className="mega__product" to={`/product/${featured.id}`} onClick={onNavigate}>
            <img src={photo(featured.images[0], 320)} alt="" loading="lazy" />
            <span>
              <em>محبوب‌ترین</em>
              {featured.name}
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}
