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
          eyebrow="Curated edits"
          title="Stories in Gold & Stone"
          copy="Four collections, each with its own temperament — from sculptural heirlooms to the quiet everyday."
          link="/shop"
          linkLabel="View all collections"
        />
        <div className="editorial-grid">
          {collections.map((collection) => (
            <Link key={collection.slug} className="editorial-card" to={`/shop?collection=${collection.slug}`}>
              <img src={photo(collection.image, 1200)} alt="" loading="lazy" />
              <span className="editorial-card__scrim" aria-hidden="true" />
              <span className="editorial-card__body">
                <span className="eyebrow eyebrow--light">Collection</span>
                <span className="editorial-card__title">{collection.name}</span>
                <span className="editorial-card__copy">{collection.copy}</span>
                <span className="editorial-card__cta">
                  Explore
                  <Icon name="arrowRight" size={15} />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
