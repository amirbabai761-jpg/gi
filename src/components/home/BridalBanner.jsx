import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'
import { photo } from '../../data/catalog.js'

export default function BridalBanner() {
  return (
    <section className="bridal-banner">
      <img src={photo('1515934751635-c81c6bc9a2d8', 1800)} alt="Gold bridal ring set resting on pale roses" loading="lazy" />
      <span className="bridal-banner__scrim" aria-hidden="true" />
      <div className="container bridal-banner__inner">
        <p className="eyebrow eyebrow--light">آتلیهٔ عروس</p>
        <h2>برای همیشه،<em>اینجا آغاز می‌شود</em>
        </h2>
        <p>وقت‌های خصوصی برای طراحی انگشتر نامزدی بر اساس داستان شما — از نخستین طرح تا سنگ نهایی.</p>
        <div className="bridal-banner__actions">
          <Link className="btn btn--light" to="/about#appointment">رزرو مشاوره</Link>
          <Link className="btn btn--ghost btn--ghost-light" to="/shop?category=bridal">کشف مجموعهٔ عروس<Icon name="arrowRight" size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
