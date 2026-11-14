import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'
import SectionHead from '../SectionHead.jsx'
import { collections, photo } from '../../data/catalog.js'

export default function EditorialGrid() {
  return (
    <section className="section editorials">
      <div className="container">
        <SectionHead
          eyebrow="انتخاب‌های گردآوری‌شده"
          title="روایت‌هایی در طلا و سنگ"
          copy="چهار مجموعه، هر یک با خلق‌وخوی خود — از یادگارهای مجسمه‌وار تا آرامش هر روز."
          link="/shop"
          linkLabel="دیدن همهٔ مجموعه‌ها"
        />
        <div className="editorial-grid">
          {collections.map((collection) => (
            <Link key={collection.slug} className="editorial-card" to={`/shop?collection=${collection.slug}`}>
              <img src={photo(collection.image, 1200)} alt="" loading="lazy" />
              <span className="editorial-card__scrim" aria-hidden="true" />
              <span className="editorial-card__body">
                <span className="eyebrow eyebrow--light">مجموعه</span>
                <span className="editorial-card__title">{collection.name}</span>
                <span className="editorial-card__copy">{collection.copy}</span>
                <span className="editorial-card__cta">کشف<Icon name="arrowRight" size={15} />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
