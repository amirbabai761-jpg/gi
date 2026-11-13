import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'
import { IMAGES, photo } from '../../data/catalog.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__media">
        <img
          src={photo(IMAGES.hero, 2000)}
          alt="Model wearing layered fine gold necklaces and rings"
          loading="eager"
        />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">The Signature Collection</p>
          <h1>
            Timeless
            <em>Brilliance</em>
          </h1>
          <p className="hero__copy">
            Exquisite designs, masterfully crafted for life's most meaningful moments. Set in
            recycled 18k gold, and made to be worn every single day.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--gold" to="/shop?sort=featured">
              Discover Signature Pieces
              <Icon name="arrowRight" size={17} />
            </Link>
            <Link className="btn btn--ghost" to="/shop">
              Explore Collections
            </Link>
          </div>
          <ul className="hero__trust">
            <li><Icon name="diamond" size={15} /> Certified diamonds</li>
            <li><Icon name="globe" size={15} /> Insured worldwide delivery</li>
            <li><Icon name="refresh" size={15} /> 30-day returns</li>
          </ul>
        </div>

        <aside className="hero__aside">
          <span className="hero__seal">Est. 1987 · Paris</span>
        </aside>
      </div>

      <div className="hero__scroll">
        <span>Scroll to explore</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </div>
    </section>
  )
}
