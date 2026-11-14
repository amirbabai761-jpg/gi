import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { IMAGES, photo } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

const faqs = [
  {
    q: 'ارسال چقدر طول می‌کشد؟',
    a: 'سفارش‌های پاریس و اتحادیهٔ اروپا در ۲ تا ۳ روز کاری و سفارش‌های بین‌المللی در ۳ تا ۵ روز می‌رسند. هر مرسوله بیمه و کاملاً ردیابی می‌شود و تحویل آن نیاز به امضا دارد.',
  },
  {
    q: 'می‌توانم قطعه‌ای را مرجوع یا تعویض کنم؟',
    a: 'بله — تا ۳۰ روز پس از تحویل، در صورت استفاده‌نشدن و همراه با گواهی و بسته‌بندی. سفارش‌های حکاکی‌شده و اختصاصی فروش قطعی دارند. با خدمات مشتریان تماس بگیرید تا برچسب پیش‌پرداخت‌شده بفرستیم.',
  },
  {
    q: 'تغییر اندازه هم انجام می‌دهید؟',
    a: 'نخستین تغییر اندازه تا ۱۲ ماه برای همهٔ انگشترها رایگان است. پس از آن، در تمام عمر قطعه با قیمت تمام‌شده انجام می‌شود.',
  },
  {
    q: 'الماس و طلای شما مسئولانه تأمین می‌شود؟',
    a: 'همهٔ الماس‌ها آزمایشگاهی یا قابل ردیابی تا منابع دارای گواهی کیمبرلی هستند و تمام طلا ۱۰۰٪ بازیافتی و مهرخورده است. گواهی سنگ همراه هر سفارش است.',
  },
  {
    q: 'می‌توانم قطعه‌ای را پیش از خرید ببینم؟',
    a: 'البته. یک وقت خصوصی در آتلیهٔ پاریس یا از طریق ویدئو رزرو کنید تا قطعه‌هایی را که می‌خواهید ببینید آماده کنیم.',
  },
]

export default function About() {
  const { notify } = useStore()
  const [form, setForm] = useState({ name: '', email: '', date: '', message: '' })

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container about-hero__inner">
          <div>
            <p className="eyebrow">مزون</p>
            <h1 className="page-title page-title--xl">جواهری برای<em>زندگی کردن</em>
            </h1>
            <p className="about-hero__copy">مزون لومیر در سال ۱۹۸۷ در پاریس بنیان گذاشته شد؛ خانه‌ای کوچک با نه زرگر که برای کسانی جواهرات نفیس می‌سازد که قصد دارند آن را بپوشند — هر روز، برای دهه‌ها.</p>
            <div className="about-stats">
              <div><strong>1987</strong><span>بنیان‌گذاری در پاریس</span></div>
              <div><strong>9</strong><span>زرگران بر میز کار</span></div>
              <div><strong>40+</strong><span>کشورهای مقصد ارسال</span></div>
            </div>
          </div>
          <div className="about-hero__media">
            <img src={photo(IMAGES.portraitPearl, 1200)} alt="زنی با گردنبند نازک طلا" />
          </div>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story__inner">
          <div className="about-story__media">
            <img src={photo(IMAGES.mannequin, 1000)} alt="گردنبندهای نازک روی نیم‌تنهٔ کتانی" loading="lazy" />
          </div>
          <div>
            <p className="eyebrow">داستان ما</p>
            <h2 className="section-title">خانه‌ای که گرد میز کار ساخته شده</h2>
            <p>الودی مارشان پیش از بنیان‌گذاری مزون، در کار نشاندن سنگ آموزش دیده بود؛ مزون در یک اتاق بالای یک چاپخانه آغاز شد. نزدیک به چهار دهه بعد، آتلیه بزرگ‌تر شده اما روش تغییر نکرده است: هر قطعه با دست طراحی می‌شود، در دسته‌های کوچک ریخته‌گری می‌شود، زیر ذره‌بین سنگ‌نشانی می‌شود و همان کسانی آن را پولیش می‌کنند که پای موم را امضا کرده‌اند.</p>
            <p>ما طرح‌های کمتری از بیشتر خانه‌ها می‌سازیم و بیشتر نگه می‌داریم. مجموعه‌هایمان بازنگری می‌شوند و جایگزین نمی‌شوند — انگشتری که در ۱۹۹۴ خریده شده هنوز می‌تواند توسط همان زرگرانی که ساخته‌اند سرویس، اندازه و پولیش شود.</p>
            <Link className="link-arrow" to="/shop">کشف مجموعه<Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="about-craft" id="craft">
        <div className="container about-craft__inner">
          <img src={photo(IMAGES.artisan, 1300)} alt="زرگری در حال کار بر میز آتلیه" loading="lazy" />
          <div className="about-craft__body">
            <p className="eyebrow eyebrow--light">هنر ساخت</p>
            <h2>چهار جفت دست، یک قطعه</h2>
            <p>سازندهٔ مدل، ریخته‌گر، سنگ‌نشان و پولیش‌کار هر یک امضای خود را روی قطعه می‌گذارند. هیچ قطعه‌ای تنها با ماشین تمام نمی‌شود. چنگک‌ها زیر ذره‌بین شکل می‌گیرند و سطوح تا یکدست شدن بازتاب پولیش می‌شوند.</p>
            <ul className="about-craft__list">
              <li><Icon name="check" size={16} />طرح‌های دست‌کشیده، ریخته‌گری در دسته‌های کوچک</li>
              <li><Icon name="check" size={16} />سنگ‌ها زیر ذره‌بین، یکی‌یکی نشانده می‌شوند</li>
              <li><Icon name="check" size={16} />پولیش نهایی به دست زرگری که موم را امضا کرده</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section about-values" id="sourcing">
        <div className="container">
          <div className="section-head section-head--center">
            <div>
              <p className="eyebrow">لوکس اخلاقی</p>
              <h2 className="section-title">زیبایی، بی سازش</h2>
            </div>
          </div>
          <div className="value-grid">
            <div className="value-card">
              <Icon name="diamond" size={26} stroke={1} />
              <h3>سنگ‌های قابل ردیابی</h3>
              <p>هر الماس آزمایشگاهی یا دارای گواهی کیمبرلی است و هر سنگ رنگی با سند منشأ خود می‌رسد.</p>
            </div>
            <div className="value-card">
              <Icon name="refresh" size={26} stroke={1} />
              <h3>طلای بازیافتی</h3>
              <p>طلای ۱۸ عیار ۱۰۰٪ بازیافتی، تصفیه‌شده در فرانسه و مهرخورده در آزمایشگاه عیار. از ۲۰۱۸ هیچ طلای تازه استخراج‌شده‌ای به کار نرفته است.</p>
            </div>
            <div className="value-card">
              <Icon name="sparkle" size={26} stroke={1} />
              <h3>ساخته‌شده برای تعمیر</h3>
              <p>سرویس، تغییر اندازه و بازسازی برای تمام عمر — چون پایدارترین قطعه همان است که نگه می‌دارید.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-packaging" id="packaging">
        <div className="container about-packaging__inner">
          <div>
            <p className="eyebrow">بسته‌بندی امضا</p>
            <h2 className="section-title section-title--sm">لحظهٔ رسیدن</h2>
            <p>هر قطعه در جعبه‌ای لاکی با آستر جیر و روبان ابریشمی از آتلیه بیرون می‌آید. گواهی اصالت و کارتی دست‌نویس همراه هر سفارش است — بگویید چه بنویسیم تا خطاط ما آن را با مرکب بنویسد.</p>
            <ul className="about-packaging__list">
              <li><Icon name="gift" size={17} />کادوپیچ رایگان</li>
              <li><Icon name="mail" size={17} />کارت دست‌نویس با واژه‌های شما</li>
              <li><Icon name="check" size={17} />گواهی اصالت</li>
            </ul>
          </div>
          <img src={photo('1515562141207-7a88fb7ce338', 900)} alt="گردنبند مروارید در بسته‌بندی امضا" loading="lazy" />
        </div>
      </section>

      <section className="section about-service" id="shipping">
        <div className="container about-service__grid">
          <div>
            <p className="eyebrow">مراقبت از مشتری</p>
            <h2 className="section-title section-title--sm">ارسال و مرجوعی</h2>
            <p>ارسال بیمه‌شدهٔ رایگان به سراسر جهان، با امضای تحویل‌گیرنده. سفارش‌های پاریس و اتحادیهٔ اروپا در ۲ تا ۳ روز کاری و سفارش‌های بین‌المللی در ۳ تا ۵ روز می‌رسند. مرجوعی تا ۳۰ روز پس از تحویل، در صورت استفاده‌نشدن، با برچسب پیش‌پرداخت‌شده از سوی تیم مشتریان پذیرفته می‌شود.</p>
            <p>عوارض و مالیات برای همهٔ مقاصد در مرحلهٔ پرداخت محاسبه می‌شود. قطعه‌های حکاکی‌شده و سفارشی فروش قطعی دارند اما همچنان مشمول سرویس مادام‌العمر هستند.</p>
          </div>
          <div id="sizing">
            <p className="eyebrow">سایز انگشتر</p>
            <h2 className="section-title section-title--sm">اندازهٔ خود را پیدا کنید</h2>
            <p className="about-service__hint">قطر داخلی انگشتری که اندازهٔ شماست را بسنجید، یا وقت اندازه‌گیری رزرو کنید تا اندازه‌گیر برایتان بفرستیم.</p>
            <table className="size-table">
              <thead>
                <tr><th>EU</th><th>US</th><th>UK</th><th>قطر داخلی</th></tr>
              </thead>
              <tbody>
                <tr><td>48</td><td>4.5</td><td>I½</td><td>15.3mm</td></tr>
                <tr><td>50</td><td>5</td><td>J½</td><td>15.7mm</td></tr>
                <tr><td>52</td><td>6</td><td>L½</td><td>16.5mm</td></tr>
                <tr><td>54</td><td>7</td><td>N½</td><td>17.3mm</td></tr>
                <tr><td>56</td><td>7.5</td><td>O½</td><td>17.7mm</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section about-care">
        <div className="container about-care__inner" id="care">
          <div>
            <p className="eyebrow">نگهداری و تعمیر</p>
            <h2 className="section-title section-title--sm">درست پوشیدن</h2>
            <p>قطعه‌ها را جدا نگه دارید، از عطر و کلر دور بمانید و سالی یک بار جواهرات را برای تمیزکاری و بازبینی رایگان بیاورید. ما قطعه‌های ارثی را نیز بازسازی می‌کنیم و یادگارها را در قالب‌های امروزی بازمی‌سازیم.</p>
            <a className="link-arrow" href="mailto:clients@maisonlumiere.com">رزرو وقت سرویس<Icon name="arrowRight" size={16} />
            </a>
          </div>
          <div className="about-care__card">
            <Icon name="sparkle" size={26} stroke={1} />
            <p>هر سفارش شامل سرویس مادام‌العمر است — تمیزکاری، بازبینی و پولیش مجدد بدون هزینه.</p>
          </div>
        </div>
      </section>

      <section className="section about-faq" id="faq">
        <div className="container about-faq__inner">
          <div>
            <p className="eyebrow">خوب است بدانید</p>
            <h2 className="section-title">پرسش‌ها، پاسخ‌داده‌شده</h2>
            <p>اگر پرسش شما اینجا نیست، تیم مشتریان ما در یک روز کاری پاسخ می‌دهد.</p>
            <a className="link-arrow" href="mailto:clients@maisonlumiere.com">نامه به خدمات مشتریان<Icon name="arrowRight" size={16} />
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>
                  {faq.q}
                  <Icon name="chevronDown" size={16} />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="appointment" id="appointment">
        <div className="container appointment__inner">
          <div className="appointment__intro">
            <p className="eyebrow eyebrow--light">مشاورهٔ خصوصی</p>
            <h2>یک ساعت با جواهرسازان ما</h2>
            <p>در آتلیهٔ پاریس یا از طریق ویدئو — قراری آرام برای دیدن قطعه‌ها از نزدیک، گفت‌وگو دربارهٔ سفارشی اختصاصی یا یافتن انگشتر نامزدی مناسب. رایگان و بدون هیچ تعهدی.</p>
            <ul>
              <li><Icon name="pin" size={16} />خیابان دو لا پِ، شمارهٔ ۱۸، ۷۵۰۰۲ پاریس</li>
              <li><Icon name="phone" size={16} /> +33 1 84 74 20 10</li>
              <li><Icon name="mail" size={16} /> clients@maisonlumiere.com</li>
            </ul>
          </div>

          <form
            className="appointment__form"
            onSubmit={(e) => {
              e.preventDefault()
              notify('درخواست وقت ثبت شد. (نمایشی: ایمیلی ارسال نشده است.)')
              setForm({ name: '', email: '', date: '', message: '' })
            }}
          >
            <div className="form-row">
              <label className="field">
                <span>نام</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="نام شما"
                />
              </label>
              <label className="field">
                <span>ایمیل</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="field">
              <span>تاریخ دلخواه</span>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </label>
            <label className="field">
              <span>دوست دارید چه چیزی ببینید؟</span>
              <textarea
                rows="3"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="انگشتر نامزدی، سفارشی اختصاصی، یک هدیه…"
              />
            </label>
            <button className="btn btn--gold btn--block" type="submit">درخواست وقت<Icon name="arrowRight" size={16} />
            </button>
            <p className="fineprint">فروشگاه نمایشی — درخواست‌ها ارسال نمی‌شوند.</p>
          </form>
        </div>
      </section>
    </div>
  )
}
