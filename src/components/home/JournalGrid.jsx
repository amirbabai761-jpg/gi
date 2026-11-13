import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'
import SectionHead from '../SectionHead.jsx'
import { articles, photo } from '../../data/catalog.js'

export default function JournalGrid() {
  return (
    <section className="section journal">
      <div className="container">
        <SectionHead
          eyebrow="The journal"
          title="Inspiration & Stories"
          copy="Notes from the atelier — on stones, styling and the pieces we keep for a lifetime."
          link="/journal"
          linkLabel="Read all articles"
        />
        <div className="journal-grid">
          {articles.map((article) => (
            <article className="journal-card" key={article.slug}>
              <Link className="journal-card__media" to={`/journal/${article.slug}`}>
                <img src={photo(article.image, 720)} alt="" loading="lazy" />
              </Link>
              <p className="journal-card__meta">
                <span>{article.date}</span>
                <span>{article.category}</span>
              </p>
              <h3>
                <Link to={`/journal/${article.slug}`}>{article.title}</Link>
              </h3>
              <p className="journal-card__excerpt">{article.excerpt}</p>
              <Link className="link-arrow link-arrow--sm" to={`/journal/${article.slug}`}>
                Read more
                <Icon name="arrowRight" size={15} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
