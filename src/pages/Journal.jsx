import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { articles, photo } from '../data/catalog.js'

export default function Journal() {
  const [lead, ...rest] = articles
  return (
    <div className="container journal-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>The Journal</span>
      </nav>

      <header className="journal-page__head">
        <p className="eyebrow">The journal</p>
        <h1 className="page-title">Inspiration & Stories</h1>
        <p className="shop__desc">
          Notes from the atelier — on stones, styling, craft and the pieces we keep for a lifetime.
        </p>
      </header>

      <Link className="journal-lead" to={`/journal/${lead.slug}`}>
        <div className="journal-lead__media">
          <img src={photo(lead.image, 1400)} alt="" />
        </div>
        <div className="journal-lead__body">
          <p className="journal-card__meta">
            <span>{lead.date}</span>
            <span>{lead.category} · {lead.readTime}</span>
          </p>
          <h2>{lead.title}</h2>
          <p>{lead.excerpt}</p>
          <span className="link-arrow">
            Read the story
            <Icon name="arrowRight" size={16} />
          </span>
        </div>
      </Link>

      <div className="journal-grid journal-grid--page">
        {rest.map((article) => (
          <article className="journal-card" key={article.slug}>
            <Link className="journal-card__media" to={`/journal/${article.slug}`}>
              <img src={photo(article.image, 800)} alt="" loading="lazy" />
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
  )
}
