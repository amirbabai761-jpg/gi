import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

export default function NotFound() {
  return (
    <div className="container empty-page notfound">
      <p className="eyebrow">404</p>
      <h1 className="page-title">این صفحه از جای خود درآمده</h1>
      <p>قطعه یا صفحه‌ای که می‌خواستید دیگر اینجا نیست. بگذارید شما را بازگردانیم.</p>
      <div className="notfound__actions">
        <Link className="btn btn--gold" to="/shop">کشف مجموعه<Icon name="arrowRight" size={16} />
        </Link>
        <Link className="btn btn--outline" to="/">بازگشت به خانه</Link>
      </div>
    </div>
  )
}
