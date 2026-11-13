import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

export default function NotFound() {
  return (
    <div className="container empty-page notfound">
      <p className="eyebrow">404</p>
      <h1 className="page-title">This page has slipped its setting</h1>
      <p>The piece or page you were looking for is no longer here. Let us guide you back.</p>
      <div className="notfound__actions">
        <Link className="btn btn--gold" to="/shop">
          Explore the collection
          <Icon name="arrowRight" size={16} />
        </Link>
        <Link className="btn btn--outline" to="/">
          Return home
        </Link>
      </div>
    </div>
  )
}
