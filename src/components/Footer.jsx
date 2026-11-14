import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import NewsletterForm from './NewsletterForm.jsx'

const footerColumns = [
  {
    title: 'خدمات مشتریان',
    links: [
      { label: 'تماس با ما', to: '/about#appointment' },
      { label: 'ارسال و مرجوعی', to: '/about#shipping' },
      { label: 'پرسش‌های پرتکرار', to: '/about#faq' },
      { label: 'راهنمای سایز انگشتر', to: '/about#sizing' },
      { label: 'نگهداری و تعمیر', to: '/about#care' },
    ],
  },
  {
    title: 'مزون',
    links: [
      { label: 'داستان ما', to: '/about' },
      { label: 'هنر ساخت', to: '/about#craft' },
      { label: 'تأمین اخلاقی', to: '/about#sourcing' },
      { label: 'ژورنال', to: '/journal' },
      { label: 'وقت‌های خصوصی', to: '/about#appointment' },
    ],
  },
  {
    title: 'فروشگاه',
    links: [
      { label: 'تازه‌ها', to: '/shop?sort=new' },
      { label: 'نامزدی و عروس', to: '/shop?category=bridal' },
      { label: 'هدایا', to: '/shop?sort=featured' },
      { label: 'علاقه‌مندی‌ها', to: '/wishlist' },
      { label: 'کارت هدیه', to: '/gift-cards' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-news">
        <div className="container footer-news__inner">
          <div>
            <p className="eyebrow">فهرست خصوصی</p>
            <h2>نامه‌هایی از مزون</h2>
            <p>مجموعه‌های تازه، روایت‌های آتلیه و پیش‌نمایش‌های خصوصی — سالی چند بار، نه بیشتر.</p>
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
              <span className="brand__sub">جواهرات نفیس · از ۱۹۸۷</span>
            </span>
          </Link>
          <p>جواهرات نفیس که در پاریس طراحی و در آتلیهٔ ما با دست ساخته می‌شوند. سنگ‌های اخلاقی، طلای بازیافتی و قطعه‌هایی که از نخستین صاحبشان عمر بیشتری می‌کنند.</p>
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
          <p className="footer-col__title">آتلیه و خدمات مشتریان</p>
          <ul>
            <li>
              <Icon name="pin" size={15} />
              <span>خیابان دو لا پِ، ۱۸<br />۷۵۰۰۲ پاریس، فرانسه</span>
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
          <p className="footer-hours">دوشنبه تا شنبه · ۱۰ صبح تا ۷ عصر</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} مزون لومیر. همهٔ حقوق محفوظ است.</p>
        <ul className="footer-legal">
          <li><Link to="/legal/terms">شرایط</Link></li>
          <li><Link to="/legal/privacy">حریم خصوصی</Link></li>
          <li><Link to="/legal/accessibility">دسترسی‌پذیری</Link></li>
          <li><Link to="/legal/cookies">کوکی‌ها</Link></li>
        </ul>
        <ul className="payments" aria-label="روش‌های پرداخت پذیرفته‌شده">
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
