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
        notify('سپاسگزاریم — در فهرست قرار گرفتید. (نمایشی: ایمیلی ارسال نشده است.)')
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
          placeholder="نشانی ایمیل شما"
          aria-label="نشانی ایمیل"
        />
      </label>
      <button className="btn btn--gold btn--sm" type="submit">عضویت<Icon name="arrowRight" size={15} />
      </button>
    </form>
  )
}
