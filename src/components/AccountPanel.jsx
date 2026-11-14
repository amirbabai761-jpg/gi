import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Overlay from './Overlay.jsx'
import Icon from './Icon.jsx'
import { useStore } from '../store/StoreContext.jsx'

export default function AccountPanel() {
  const { ui, closeUi, wishlist, notify } = useStore()
  const [email, setEmail] = useState('')

  return (
    <Overlay open={ui.account} onClose={() => closeUi('account')} label="حساب کاربری">
      <div className="panel-head">
        <div>
          <p className="eyebrow">مشتری خصوصی</p>
          <h2 className="panel-title">حساب کاربری شما</h2>
        </div>
      </div>

      <div className="account">
        <p className="account__lede">وارد شوید تا سفارش‌های اختصاصی را پیگیری کنید، قطعه‌ها را در علاقه‌مندی‌ها ذخیره کنید و پیش از همه مجموعه‌های تازه را ببینید.</p>
        <form
          className="account__form"
          onSubmit={(e) => {
            e.preventDefault()
            notify('این نسخه نمایشی است — ورود به حساب در این پیش‌نمایش متصل نیست.')
            closeUi('account')
          }}
        >
          <label className="field">
            <span>نشانی ایمیل</span>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button className="btn btn--gold btn--block" type="submit">ادامه<Icon name="arrowRight" size={16} />
          </button>
        </form>
        <p className="account__note">این یک فروشگاه نمایشی است — ورود به حساب متصل نیست و حسابی ساخته نمی‌شود.</p>

        <div className="account__divider">
          <span>یا به‌عنوان مهمان بگردید</span>
        </div>

        <Link to="/wishlist" className="account__link" onClick={() => closeUi('account')}>
          <Icon name="heart" size={18} />
          <span>علاقه‌مندی‌های شما<em>{wishlist.length} saved {wishlist.length === 1 ? 'piece' : 'pieces'}</em>
          </span>
          <Icon name="arrowRight" size={16} />
        </Link>
        <Link to="/about#appointment" className="account__link" onClick={() => closeUi('account')}>
          <Icon name="sparkle" size={18} />
          <span>رزرو مشاورهٔ خصوصی<em>در آتلیه یا از طریق ویدئو</em>
          </span>
          <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </Overlay>
  )
}
