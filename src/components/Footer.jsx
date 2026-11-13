import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import NewsletterForm from './NewsletterForm.jsx'

const footerColumns = [
  {
    title: 'Customer Care',
    links: [
      { label: 'Contact Us', to: '/about#appointment' },
      { label: 'Shipping & Returns', to: '/about#shipping' },
      { label: 'Frequently Asked Questions', to: '/about#faq' },
      { label: 'Ring Size Guide', to: '/about#sizing' },
      { label: 'Care & Repair', to: '/about#care' },
    ],
  },
  {
    title: 'The Maison',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Craftsmanship', to: '/about#craft' },
      { label: 'Ethical Sourcing', to: '/about#sourcing' },
      { label: 'The Journal', to: '/journal' },
      { label: 'Private Appointments', to: '/about#appointment' },
    ],
  },
  {
    title: 'Shop',
    links: [
      { label: 'New Arrivals', to: '/shop?sort=new' },
      { label: 'Engagement & Bridal', to: '/shop?category=bridal' },
      { label: 'Gifts', to: '/shop?sort=featured' },
      { label: 'Wishlist', to: '/wishlist' },
      { label: 'Gift Cards', to: '/gift-cards' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-news">
        <div className="container footer-news__inner">
          <div>
            <p className="eyebrow">The private list</p>
            <h2>Letters from the Maison</h2>
            <p>New collections, atelier stories and private previews — a few times a year, never more.</p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="brand brand--footer" to="/">
            <span className="brand__mark">
              <Icon name="diamond" size={18} stroke={1} />
            </span>
            <span className="brand__text">
              <span className="brand__name">Maison Lumière</span>
              <span className="brand__sub">Fine Jewels · Est. 1987</span>
            </span>
          </Link>
          <p>
            Fine jewellery designed in Paris and made by hand in our atelier. Ethically sourced stones,
            recycled gold, and pieces intended to outlive their first owner.
          </p>
          <div className="socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Icon name="instagram" size={17} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
              <Icon name="pinterest" size={17} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Icon name="facebook" size={17} />
            </a>
          </div>
        </div>

        {footerColumns.map((column) => (
          <nav className="footer-col" key={column.title} aria-label={column.title}>
            <p className="footer-col__title">{column.title}</p>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="footer-col footer-contact">
          <p className="footer-col__title">Atelier & Client Services</p>
          <ul>
            <li>
              <Icon name="pin" size={15} />
              <span>18 Rue de la Paix<br />75002 Paris, France</span>
            </li>
            <li>
              <Icon name="phone" size={15} />
              <a href="tel:+33184742010">+33 1 84 74 20 10</a>
            </li>
            <li>
              <Icon name="mail" size={15} />
              <a href="mailto:clients@maisonlumiere.com">clients@maisonlumiere.com</a>
            </li>
          </ul>
          <p className="footer-hours">Mon–Sat · 10am–7pm CET</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Maison Lumière. All rights reserved.</p>
        <ul className="footer-legal">
          <li><Link to="/legal/terms">Terms</Link></li>
          <li><Link to="/legal/privacy">Privacy</Link></li>
          <li><Link to="/legal/accessibility">Accessibility</Link></li>
          <li><Link to="/legal/cookies">Cookies</Link></li>
        </ul>
        <ul className="payments" aria-label="Accepted payment methods">
          <li>VISA</li>
          <li>MC</li>
          <li>AMEX</li>
          <li>PayPal</li>
          <li> Pay</li>
        </ul>
      </div>
    </footer>
  )
}
