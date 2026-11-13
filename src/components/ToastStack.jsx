import React from 'react'
import { useStore } from '../store/StoreContext.jsx'
import Icon from './Icon.jsx'

export default function ToastStack() {
  const { toasts, dismissToast } = useStore()
  if (toasts.length === 0) return null

  return (
    <div className="toast-stack" role="status" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast--${toast.tone}`}>
          <span className="toast__icon">
            <Icon name={toast.tone === 'success' ? 'check' : 'sparkle'} size={15} stroke={1.4} />
          </span>
          <p>{toast.message}</p>
          <button onClick={() => dismissToast(toast.id)} aria-label="Dismiss notification">
            <Icon name="close" size={14} />
          </button>
        </div>
      ))}
    </div>
  )
}
