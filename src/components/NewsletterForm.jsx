import React, { useState } from 'react'
import { useStore } from '../store/StoreContext.jsx'
import Icon from './Icon.jsx'

export default function NewsletterForm({ compact = false, onDone }) {
  const [email, setEmail] = useState('')
  const { notify } = useStore()

  return (
    <form
      className={`newsletter ${compact ? 'newsletter--compact' : ''}`}
      onSubmit={(e) => {
        e.preventDefault()
        if (!email.trim()) return
        notify('Thank you — you are on the list. (Demo: no email has been sent.)')
        setEmail('')
        if (onDone) onDone()
      }}
    >
      <label className="newsletter__field">
        <Icon name="mail" size={17} />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
        />
      </label>
      <button className="btn btn--gold btn--sm" type="submit">
        Subscribe
        <Icon name="arrowRight" size={15} />
      </button>
    </form>
  )
}
