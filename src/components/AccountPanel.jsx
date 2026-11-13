import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Overlay from './Overlay.jsx'
import Icon from './Icon.jsx'
import { useStore } from '../store/StoreContext.jsx'

export default function AccountPanel() {
  const { ui, closeUi, wishlist, notify } = useStore()
  const [email, setEmail] = useState('')

  return (
    <Overlay open={ui.account} onClose={() => closeUi('account')} label="Account">
      <div className="panel-head">
        <div>
          <p className="eyebrow">Private client</p>
          <h2 className="panel-title">Your Account</h2>
        </div>
      </div>

      <div className="account">
        <p className="account__lede">
          Sign in to follow your commissions, save pieces to your wishlist and be first to see new collections.
        </p>
        <form
          className="account__form"
          onSubmit={(e) => {
            e.preventDefault()
            notify('This is a demo — account sign-in is not connected in this preview.')
            closeUi('account')
          }}
        >
          <label className="field">
            <span>Email address</span>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button className="btn btn--gold btn--block" type="submit">
            Continue
            <Icon name="arrowRight" size={16} />
          </button>
        </form>
        <p className="account__note">
          This is a preview storefront — sign-in is not connected and no account is created.
        </p>

        <div className="account__divider">
          <span>Or browse as a guest</span>
        </div>

        <Link to="/wishlist" className="account__link" onClick={() => closeUi('account')}>
          <Icon name="heart" size={18} />
          <span>
            Your wishlist
            <em>{wishlist.length} saved {wishlist.length === 1 ? 'piece' : 'pieces'}</em>
          </span>
          <Icon name="arrowRight" size={16} />
        </Link>
        <Link to="/about#appointment" className="account__link" onClick={() => closeUi('account')}>
          <Icon name="sparkle" size={18} />
          <span>
            Book a private consultation
            <em>In the atelier or by video</em>
          </span>
          <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </Overlay>
  )
}
