import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Overlay from './Overlay.jsx'
import Icon from './Icon.jsx'
import { categories, collections, photo } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

export default function MobileNav() {
  const { ui, closeUi, openAccount, openSearch } = useStore()
  const [panel, setPanel] = useState(null)

  const close = () => {
    setPanel(null)
    closeUi('menu')
  }

  return (
    <Overlay open={ui.menu} onClose={close} variant="drawer-left" label="Menu">
      <div className="mobile-nav">
        <p className="brand brand--mobile">
          <span className="brand__name">Maison Lumière</span>
          <span className="brand__sub">Fine Jewels</span>
        </p>

        <button className="mobile-search" onClick={() => { closeUi('menu'); openSearch() }}>
          <Icon name="search" size={17} />
          Search the collection
        </button>

        <nav aria-label="Mobile">
          <ul className="accordion">
            <li className="accordion__item">
              <button className={`accordion__trigger ${panel === 'jewelry' ? 'is-open' : ''}`} onClick={() => setPanel(panel === 'jewelry' ? null : 'jewelry')}>
                Jewelry
                <Icon name="chevronDown" size={16} />
              </button>
              {panel === 'jewelry' && (
                <ul className="accordion__panel">
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <Link to={`/shop?category=${c.slug}`} onClick={close}>
                        {c.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/shop" onClick={close}>View all jewelry</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="accordion__item">
              <button className={`accordion__trigger ${panel === 'collections' ? 'is-open' : ''}`} onClick={() => setPanel(panel === 'collections' ? null : 'collections')}>
                Collections
                <Icon name="chevronDown" size={16} />
              </button>
              {panel === 'collections' && (
                <ul className="accordion__panel">
                  {collections.map((c) => (
                    <li key={c.slug}>
                      <Link to={`/shop?collection=${c.slug}`} onClick={close}>
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {[
              ['New Arrivals', '/shop?sort=new'],
              ['Engagement & Bridal', '/shop?category=bridal'],
              ['Gifts', '/shop?sort=featured'],
              ['Our Story', '/about'],
              ['The Journal', '/journal'],
            ].map(([label, to]) => (
              <li key={label} className="accordion__item">
                <Link className="accordion__trigger" to={to} onClick={close}>
                  {label}
                  <Icon name="chevronRight" size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-nav__feature">
          <img src={photo('1616837874254-8d5aaa63e273', 640)} alt="" loading="lazy" />
          <div>
            <p className="eyebrow">Book a private viewing</p>
            <p>An hour with our jewellers, in the atelier or by video.</p>
            <Link className="btn btn--outline btn--sm" to="/about#appointment" onClick={close}>
              Request an appointment
            </Link>
          </div>
        </div>

        <div className="mobile-nav__foot">
          <button className="text-btn" onClick={() => { closeUi('menu'); openAccount() }}>
            <Icon name="user" size={16} /> Account
          </button>
          <Link className="text-btn" to="/wishlist" onClick={close}>
            <Icon name="heart" size={16} /> Wishlist
          </Link>
          <a className="text-btn" href="mailto:clients@maisonlumiere.com">
            <Icon name="mail" size={16} /> Contact
          </a>
        </div>
      </div>
    </Overlay>
  )
}
