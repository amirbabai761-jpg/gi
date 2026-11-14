import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import OrderConfirmation from '../components/OrderConfirmation.jsx'
import { formatPrice, getProduct, photo } from '../data/catalog.js'
import { useStore } from '../store/StoreContext.jsx'

export default function Checkout() {
  const { cart, subtotal, notify, updateQty, removeLine, clearCart } = useStore()
  const [placing, setPlacing] = useState(false)
  const [placed, setPlaced] = useState(null)
  const shipping = subtotal >= 1500 || subtotal === 0 ? 0 : 25
  const total = subtotal + shipping

  const placeOrder = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const items = cart
      .map((line) => {
        const product = getProduct(line.id)
        return product
          ? {
              key: line.key,
              name: product.name,
              qty: line.qty,
              metal: line.metal,
              size: line.size,
              price: product.price,
            }
          : null
      })
      .filter(Boolean)

    const order = {
      number: `ML-${String(Date.now()).slice(-6)}`,
      firstName: String(form.get('firstName') || '').trim(),
      email: String(form.get('email') || '').trim(),
      total,
      items,
    }

    setPlacing(true)
    setTimeout(() => {
      setPlacing(false)
      setPlaced(order)
      clearCart()
      notify(`سفارش ${order.number} ثبت شد — این نسخه نمایشی است، پس مبلغی برداشت نشد.`, 'success')
    }, 900)
  }

  return (
    <div className="container checkout">
      <nav className="breadcrumb" aria-label="مسیر صفحه">
        <Link to="/">خانه</Link>
        <span>/</span>
        <span>تکمیل خرید</span>
      </nav>

      {placed ? (
        <OrderConfirmation order={placed} />
      ) : (
        <>
          <header className="checkout__head">
            <p className="eyebrow">پرداخت امن</p>
            <h1 className="page-title">تکمیل سفارش</h1>
          </header>

          <div className="demo-note">
            <Icon name="sparkle" size={18} />
            <p>
              <strong>این یک فروشگاه نمایشی است.</strong>هیچ پرداختی انجام نمی‌شود و هیچ سفارشی ثبت نمی‌گردد. محتوای سبد فقط روی همین دستگاه ذخیره می‌شود.</p>
          </div>

          {cart.length === 0 ? (
            <div className="shop-empty">
              <Icon name="bag" size={30} stroke={1} />
              <h2>سبد خرید شما خالی است</h2>
              <p>برای دیدن تجربهٔ خرید، یک قطعه به سبد بیفزایید.</p>
              <Link className="btn btn--gold" to="/shop">کشف مجموعه</Link>
            </div>
          ) : (
            <div className="checkout__grid">
              <form className="checkout__form" onSubmit={placeOrder}>
                <section>
                  <h2>تماس</h2>
                  <div className="form-row">
                    <label className="field">
                      <span>نام</span>
                      <input required name="firstName" placeholder="نام" />
                    </label>
                    <label className="field">
                      <span>نام خانوادگی</span>
                      <input required name="lastName" placeholder="نام خانوادگی" />
                    </label>
                  </div>
                  <label className="field">
                    <span>ایمیل</span>
                    <input type="email" required name="email" placeholder="you@example.com" />
                  </label>
                  <label className="field">
                    <span>تلفن (برای تحویل)</span>
                    <input type="tel" placeholder="+33 6 00 00 00 00" />
                  </label>
                </section>

                <section>
                  <h2>تحویل</h2>
                  <label className="field">
                    <span>نشانی</span>
                    <input required placeholder="خیابان و پلاک" />
                  </label>
                  <div className="form-row">
                    <label className="field">
                      <span>شهر</span>
                      <input required placeholder="شهر" />
                    </label>
                    <label className="field">
                      <span>کد پستی</span>
                      <input required placeholder="75002" />
                    </label>
                  </div>
                  <label className="field">
                    <span>کشور</span>
                    <select defaultValue="فرانسه">
                      <option>فرانسه</option>
                      <option>بریتانیا</option>
                      <option>آلمان</option>
                      <option>ایالات متحده</option>
                      <option>امارات متحدهٔ عربی</option>
                      <option>ژاپن</option>
                    </select>
                  </label>
                  <label className="field">
                    <span>یادداشت هدیه (اختیاری)</span>
                    <textarea rows="2" placeholder="این را روی کارت دست‌نویس خود می‌نویسیم." />
                  </label>
                </section>

                <section>
                  <h2>پرداخت</h2>
                  <div className="payment-placeholder">
                    <Icon name="lock" size={18} />
                    <p>پرداخت کارت و کیف پول در این نسخهٔ نمایشی متصل نیست. در نسخهٔ نهایی، این مرحله یک صفحهٔ پرداخت امن و منطبق با PCI باز می‌کند.</p>
                  </div>
                </section>

                <button className="btn btn--gold btn--block btn--lg" type="submit" disabled={placing}>
                  {placing ? 'در حال پردازش…' : `Place demo order — ${formatPrice(total)}`}
                  <Icon name="arrowRight" size={17} />
                </button>
                <p className="fineprint">
                  Demo only: no charge, no order, no data leaves this browser. By continuing you agree to our{' '}
                  <Link to="/legal/terms">terms</Link>و<Link to="/legal/privacy">سیاست حریم خصوصی</Link>.
                </p>
              </form>

              <aside className="checkout__summary">
                <h2>خلاصهٔ سفارش</h2>
                <ul className="checkout-lines">
                  {cart.map((line) => {
                    const product = getProduct(line.id)
                    if (!product) return null
                    return (
                      <li key={line.key}>
                        <img src={photo(product.images[0], 200)} alt="" />
                        <div>
                          {product.category === 'gift-cards' ? (
                            <span className="checkout-lines__name">{product.name}</span>
                          ) : (
                            <Link to={`/product/${product.id}`}>{product.name}</Link>
                          )}
                          <p>{line.metal}{line.size ? ` · ${line.size}` : ''}</p>
                          <div className="checkout-lines__qty">
                            <button onClick={() => updateQty(line.key, line.qty - 1)} aria-label="کاهش تعداد">
                              <Icon name="minus" size={12} />
                            </button>
                            <span>{line.qty}</span>
                            <button onClick={() => updateQty(line.key, line.qty + 1)} aria-label="افزایش تعداد">
                              <Icon name="plus" size={12} />
                            </button>
                            <button className="text-btn checkout-lines__remove" onClick={() => removeLine(line.key)}>حذف</button>
                          </div>
                        </div>
                        <strong>{formatPrice(product.price * line.qty)}</strong>
                      </li>
                    )
                  })}
                </ul>

                <div className="summary-rows">
                  <div><span>جمع سبد</span><span>{formatPrice(subtotal)}</span></div>
                  <div><span>ارسال بیمه‌شده</span><span>{shipping === 0 ? 'رایگان' : formatPrice(shipping)}</span></div>
                  <div><span>عوارض و مالیات</span><span>در مرحلهٔ پرداخت محاسبه می‌شود</span></div>
                  <div className="summary-total"><span>مبلغ کل</span><strong>{formatPrice(total)}</strong></div>
                </div>

                <ul className="summary-trust">
                  <li><Icon name="lock" size={15} />پرداخت امن و رمزنگاری‌شده</li>
                  <li><Icon name="truck" size={15} />تحویل بیمه‌شده با امضا</li>
                  <li><Icon name="refresh" size={15} />۳۰ روز مهلت مرجوعی</li>
                </ul>
              </aside>
            </div>
          )}
        </>
      )}
    </div>
  )
}
