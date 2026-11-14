import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'
import { IMAGES, photo } from '../../data/catalog.js'

export default function BrandStory() {
  return (
    <section className="section story" id="craft">
      <div className="container story__inner">
        <div className="story__media">
          <img src={photo(IMAGES.artisan, 1200)} alt="زرگری در حال پرداخت انگشتر طلا بر میز کار" loading="lazy" />
          <div className="story__badge">
            <span className="story__badge-num">38</span>
            <span>سال‌ها بر میز کار</span>
          </div>
        </div>

        <div className="story__body">
          <p className="eyebrow">ساخته‌شده برای ماندن</p>
          <h2 className="section-title">زیبایی در پس هر جزئیات</h2>
          <p className="story__lede">هر قطعهٔ مزون لومیر با یک طرح آغاز می‌شود و پیش از رسیدن به شما از چهار جفت دست می‌گذرد.</p>
          <p>ما با طلای بازیافتی ۱۸ عیار و سنگ‌های قابل ردیابی کار می‌کنیم؛ سنگ‌هایی که برای رفتارشان در نور انتخاب می‌شوند، نه برای اندازه‌شان روی کاغذ. نگین‌بندی‌ها با دست بریده می‌شوند، چنگک‌ها زیر ذره‌بین شکل می‌گیرند و هر سطح چنان پولیش می‌شود که بازتاب پیوسته شود.</p>

          <ul className="story__values">
            <li>
              <span className="value-icon"><Icon name="diamond" size={19} /></span>
              <div>
                <strong>تأمین اخلاقی</strong>
                <p>سنگ‌های قابل ردیابی و طلای بازیافتی، بدون استثنا.</p>
              </div>
            </li>
            <li>
              <span className="value-icon"><Icon name="scissors" size={19} /></span>
              <div>
                <strong>دست‌ساز</strong>
                <p>ساخته‌شده بر میز کار آتلیهٔ پاریس به دست نه زرگر.</p>
              </div>
            </li>
            <li>
              <span className="value-icon"><Icon name="sparkle" size={19} /></span>
              <div>
                <strong>کیفیت یادگاری</strong>
                <p>سرویس، تغییر اندازه و بازسازی مادام‌العمر شامل می‌شود.</p>
              </div>
            </li>
          </ul>

          <div className="story__foot">
            <Link className="btn btn--outline" to="/about">هنر ساخت ما<Icon name="arrowRight" size={16} />
            </Link>
            <p className="story__signature">— الودی مارشان، مدیر خلاقیت</p>
          </div>
        </div>
      </div>
    </section>
  )
}
