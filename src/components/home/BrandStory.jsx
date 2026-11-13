import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'
import { IMAGES, photo } from '../../data/catalog.js'

export default function BrandStory() {
  return (
    <section className="section story" id="craft">
      <div className="container story__inner">
        <div className="story__media">
          <img src={photo(IMAGES.artisan, 1200)} alt="A goldsmith finishing a gold ring at the bench" loading="lazy" />
          <div className="story__badge">
            <span className="story__badge-num">38</span>
            <span>Years at the bench</span>
          </div>
        </div>

        <div className="story__body">
          <p className="eyebrow">Crafted to be cherished</p>
          <h2 className="section-title">The Beauty Behind Every Detail</h2>
          <p className="story__lede">
            Every Maison Lumière piece begins as a drawing and passes through four pairs of hands before
            it ever reaches yours.
          </p>
          <p>
            We work in recycled 18k gold and traceable stones, chosen for the way they behave in light
            rather than for their size on paper. Settings are cut by hand, claws are shaped under a
            loupe, and each surface is polished until the reflection becomes continuous.
          </p>

          <ul className="story__values">
            <li>
              <span className="value-icon"><Icon name="diamond" size={19} /></span>
              <div>
                <strong>Ethically sourced</strong>
                <p>Traceable stones and recycled gold, without exception.</p>
              </div>
            </li>
            <li>
              <span className="value-icon"><Icon name="scissors" size={19} /></span>
              <div>
                <strong>Handcrafted</strong>
                <p>Bench-made in our Paris atelier by nine goldsmiths.</p>
              </div>
            </li>
            <li>
              <span className="value-icon"><Icon name="sparkle" size={19} /></span>
              <div>
                <strong>Heirloom quality</strong>
                <p>Lifetime servicing, resizing and restoration included.</p>
              </div>
            </li>
          </ul>

          <div className="story__foot">
            <Link className="btn btn--outline" to="/about">
              Our craftsmanship
              <Icon name="arrowRight" size={16} />
            </Link>
            <p className="story__signature">— Élodie Marchand, Creative Director</p>
          </div>
        </div>
      </div>
    </section>
  )
}
