import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'
import { IMAGES, photo } from '../../data/catalog.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__media">
        <img
          src={photo(IMAGES.hero, 2000)}
          alt="مانکنی با زنجیرهای نازک طلا و انگشتر"
          loading="eager"
        />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">مجموعهٔ امضای مزون</p>
          <h1>درخششی<em>بی‌زمان</em>
          </h1>
          <p className="hero__copy">طرح‌هایی بی‌نقص، استادانه ساخته‌شده برای مهم‌ترین لحظه‌های زندگی. در طلای بازیافتی ۱۸ عیار، برای پوشیدن در هر روز.</p>
          <div className="hero__actions">
            <Link className="btn btn--gold" to="/shop?sort=featured">کشف قطعه‌های امضای مزون<Icon name="arrowRight" size={17} />
            </Link>
            <Link className="btn btn--ghost" to="/shop">کشف مجموعه‌ها</Link>
          </div>
          <ul className="hero__trust">
            <li><Icon name="diamond" size={15} />الماس‌های گواهی‌دار</li>
            <li><Icon name="globe" size={15} />ارسال بیمه‌شده به سراسر جهان</li>
            <li><Icon name="refresh" size={15} />۳۰ روز مهلت مرجوعی</li>
          </ul>
        </div>

        <aside className="hero__aside">
          <span className="hero__seal">از ۱۹۸۷ · پاریس</span>
        </aside>
      </div>

      <div className="hero__scroll">
        <span>برای کشف، پایین بروید</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </div>
    </section>
  )
}
