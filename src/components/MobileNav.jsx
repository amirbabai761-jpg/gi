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
    <Overlay open={ui.menu} onClose={close} variant="drawer-left" label="منو">
      <div className="mobile-nav">
        <p className="brand brand--mobile">
          <span className="brand__name">Maison Lumière</span>
          <span className="brand__sub">جواهرات نفیس</span>
        </p>

        <button className="mobile-search" onClick={() => { closeUi('menu'); openSearch() }}>
          <Icon name="search" size={17} />جست‌وجو در مجموعه</button>

        <nav aria-label="Mobile">
          <ul className="accordion">
            <li className="accordion__item">
              <button className={`accordion__trigger ${panel === 'jewelry' ? 'is-open' : ''}`} onClick={() => setPanel(panel === 'jewelry' ? null : 'jewelry')}>جواهرات<Icon name="chevronDown" size={16} />
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
                    <Link to="/shop" onClick={close}>دیدن همهٔ جواهرات</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="accordion__item">
              <button className={`accordion__trigger ${panel === 'collections' ? 'is-open' : ''}`} onClick={() => setPanel(panel === 'collections' ? null : 'collections')}>مجموعه‌ها<Icon name="chevronDown" size={16} />
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
              ['تازه‌ها', '/shop?sort=new'],
              ['نامزدی و عروس', '/shop?category=bridal'],
              ['هدایا', '/shop?sort=featured'],
              ['داستان ما', '/about'],
              ['ژورنال', '/journal'],
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
            <p className="eyebrow">رزرو بازدید خصوصی</p>
            <p>یک ساعت با جواهرسازان ما، در آتلیه یا از طریق ویدئو.</p>
            <Link className="btn btn--outline btn--sm" to="/about#appointment" onClick={close}>درخواست وقت</Link>
          </div>
        </div>

        <div className="mobile-nav__foot">
          <button className="text-btn" onClick={() => { closeUi('menu'); openAccount() }}>
            <Icon name="user" size={16} />حساب کاربری</button>
          <Link className="text-btn" to="/wishlist" onClick={close}>
            <Icon name="heart" size={16} />علاقه‌مندی‌ها</Link>
          <a className="text-btn" href="mailto:clients@maisonlumiere.com">
            <Icon name="mail" size={16} />تماس</a>
        </div>
      </div>
    </Overlay>
  )
}
