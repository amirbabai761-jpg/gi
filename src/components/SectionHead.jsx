import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function SectionHead({ eyebrow, title, copy, link, linkLabel = 'View all', align = 'left' }) {
  return (
    <div className={`section-head section-head--${align}`}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="section-title">{title}</h2>
        {copy && <p className="section-copy">{copy}</p>}
      </div>
      {link && (
        <Link className="link-arrow" to={link}>
          {linkLabel}
          <Icon name="arrowRight" size={16} />
        </Link>
      )}
    </div>
  )
}
