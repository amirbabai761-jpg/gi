import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'
import { categories, photo } from '../../data/catalog.js'

export default function CategoryStrip() {
  return (
    <section className="section categories">
      <div className="container">
        <div className="categories__head">
          <p className="eyebrow">Explore</p>
          <h2 className="section-title section-title--sm">Shop by Category</h2>
        </div>
        <ul className="category-strip">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link className="category-card" to={`/shop?category=${category.slug}`}>
                <span className="category-card__media">
                  <img src={photo(category.image, 560)} alt="" loading="lazy" />
                </span>
                <span className="category-card__name">
                  {category.name}
                  <Icon name="arrowRight" size={14} />
                </span>
                <span className="category-card__tagline">{category.tagline}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
