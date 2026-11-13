import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { categories, collections, getProduct, photo } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

const navItems = [
  { label: 'New Arrivals', to: '/shop?sort=new' },
  { label: 'Collections', mega: 'collections' },
  { label: 'Jewelry', mega: 'jewelry' },
  { label: 'Engagement & Bridal', to: '/shop?category=bridal' },
  { label: 'Gifts', mega: 'gifts' },
  { label: 'About Us', to: '/about' },
]

const giftEdits = [
  { label: 'Under $1,000', to: '/shop?max=1000' },
  { label: 'Under $2,500', to: '/shop?max=2500' },
  { label: 'The Anniversary Edit', to: '/shop?collection=modern-heirlooms' },
  { label: 'Pearl & Moonstone', to: '/shop?sort=new' },
  { label: 'Gift Cards', to: '/gift-cards' },
]

const announcements = [
  'Complimentary insured shipping on all orders',
  'Ethical luxury, beautifully crafted',
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mega, setMega] = useState(null)
  const [announcement, setAnnouncement] = useState(0)
  const closeTimer = useRef(null)
  const { cartCount, wishlist, openCart, openSearch, openMenu, openAccount } = useStore()

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
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="announcement">
        <div className="container announcement__inner">
          <div className="announcement__messages" aria-live="off">
            {announcements.map((message, i) => (
              <span key={message} className={i === announcement ? 'is-active' : ''}>
                {message}
              </span>
            ))}
          </div>
          <span className="announcement__note">Paris · Est. 1987</span>
          <Link className="announcement__link" to="/about#appointment">
            Book an appointment
          </Link>
        </div>
      </div>

      <div
        className="nav-shell"
        onMouseLeave={scheduleClose}
      >
        <div className="container nav-inner">
          <button className="icon-btn nav-burger" aria-label="Open menu" onClick={openMenu}>
            <Icon name="menu" size={22} />
          </button>

          <Link className="brand" to="/" aria-label="Maison Lumière — home">
            <span className="brand__mark">
              <Icon name="diamond" size={18} stroke={1} />
            </span>
            <span className="brand__text">
              <span className="brand__name">Maison Lumière</span>
              <span className="brand__sub">Fine Jewels</span>
            </span>
          </Link>

          <nav className="primary-nav" aria-label="Primary">
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
            <button className="icon-btn" aria-label="Search" onClick={openSearch}>
              <Icon name="search" size={19} />
            </button>
            <button className="icon-btn icon-btn--hide-sm" aria-label="Account" onClick={openAccount}>
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
            <Link className="btn btn--gold btn--sm nav-consult" to="/about#appointment">
              Private Consultation
            </Link>
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
      eyebrow: 'Shop by category',
      links: categories.map((c) => ({ label: c.name, to: `/shop?category=${c.slug}` })),
      columns: [
        {
          title: 'Metal & Stone',
          links: [
            { label: 'Yellow Gold', to: '/shop?sort=price-asc' },
            { label: 'White Gold', to: '/shop?sort=price-desc' },
            { label: 'Pearl', to: '/shop?q=pearl' },
            { label: 'Diamond', to: '/shop?q=diamond' },
          ],
        },
      ],
      feature: { image: '1599643478518-a784e5dc4c8f', label: 'Color of Elegance', to: '/shop?collection=color-of-elegance' },
    },
    collections: {
      eyebrow: 'Our collections',
      links: collections.map((c) => ({ label: c.name, to: `/shop?collection=${c.slug}` })),
      columns: [
        {
          title: 'Edits',
          links: [
            { label: 'New Arrivals', to: '/shop?sort=new' },
            { label: 'Bestsellers', to: '/shop?sort=featured' },
            { label: 'Limited Edition', to: '/shop?q=limited' },
            { label: 'Bridal', to: '/shop?category=bridal' },
          ],
        },
      ],
      feature: { image: '1616837874254-8d5aaa63e273', label: 'Modern Heirlooms', to: '/shop?collection=modern-heirlooms' },
    },
    gifts: {
      eyebrow: 'The gift edit',
      links: giftEdits,
      columns: [
        {
          title: 'For someone special',
          links: [
            { label: 'For Her', to: '/shop' },
            { label: 'Anniversary', to: '/shop?collection=forever-begins-here' },
            { label: 'Everyday Luxuries', to: '/shop?collection=everyday-essentials' },
            { label: 'Signature Packaging', to: '/about#packaging' },
          ],
        },
      ],
      feature: { image: '1515562141207-7a88fb7ce338', label: 'Gift wrapping & notes', to: '/about#packaging' },
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
              <em>Most loved</em>
              {featured.name}
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}
