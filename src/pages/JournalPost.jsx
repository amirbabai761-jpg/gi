import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { articles, photo } from '../data/catalog.js'

export default function JournalPost() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <div className="container section empty-page">
        <p className="eyebrow">Not found</p>
        <h1 className="page-title">That story is not here</h1>
        <Link className="btn btn--gold" to="/journal">
          Back to the journal
        </Link>
      </div>
    )
  }

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <article className="post">
      <div className="container post__head">
        <Link className="text-btn post__back" to="/journal">
          <Icon name="arrowLeft" size={15} /> The Journal
        </Link>
        <p className="eyebrow">{article.category}</p>
        <h1 className="page-title page-title--lg">{article.title}</h1>
        <p className="post__meta">
          {article.date} · {article.readTime} · By the Maison Lumière editorial team
        </p>
      </div>

      <div className="container post__media">
        <img src={photo(article.image, 1800)} alt="" />
      </div>

      <div className="container post__body">
        <p className="post__lede">{article.excerpt}</p>
        {article.body.map((paragraph, i) => (
          <React.Fragment key={i}>
            <p>{paragraph}</p>
            {i === 1 && (
              <blockquote className="post__quote">
                “A well-cut stone will outperform a larger one every time the light changes.”
                <cite>— Atelier notes</cite>
              </blockquote>
            )}
          </React.Fragment>
        ))}

        <div className="post__foot">
          <div className="post__tags">
            <span className="chip">{article.category}</span>
            <span className="chip">Fine jewelry</span>
            <span className="chip">Maison Lumière</span>
          </div>
          <Link className="btn btn--outline btn--sm" to="/shop">
            Shop the collection
            <Icon name="arrowRight" size={15} />
          </Link>
        </div>
      </div>

      <div className="container post__more">
        <div className="section-head section-head--left">
          <div>
            <p className="eyebrow">Continue reading</p>
            <h2 className="section-title section-title--sm">More from the Journal</h2>
          </div>
        </div>
        <div className="journal-grid journal-grid--three">
          {more.map((item) => (
            <article className="journal-card" key={item.slug}>
              <Link className="journal-card__media" to={`/journal/${item.slug}`}>
                <img src={photo(item.image, 720)} alt="" loading="lazy" />
              </Link>
              <p className="journal-card__meta"><span>{item.date}</span><span>{item.category}</span></p>
              <h3><Link to={`/journal/${item.slug}`}>{item.title}</Link></h3>
            </article>
          ))}
        </div>
      </div>
    </article>
  )
}
