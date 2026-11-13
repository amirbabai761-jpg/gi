import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Icon from './Icon.jsx'

export default function Overlay({ open, onClose, variant = 'drawer-right', label, children, className = '' }) {
  const panelRef = useRef(null)
  const lastFocus = useRef(null)

  useEffect(() => {
    if (!open) return
    lastFocus.current = document.activeElement
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      const panel = panelRef.current
      if (!panel) return
      const target = panel.querySelector(
        '[autofocus], input:not([type="hidden"]), button:not([data-skip-focus]), a[href], select'
      )
      if (target) target.focus({ preventScroll: true })
    }, 60)

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      if (lastFocus.current && lastFocus.current.focus) {
        lastFocus.current.focus({ preventScroll: true })
      }
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className={`overlay overlay--${variant} ${className}`} role="presentation">
      <div className="overlay__scrim" onClick={onClose} aria-hidden="true" />
      <div
        className="overlay__panel"
        role="dialog"
        aria-modal="true"
        aria-label={label}
        ref={panelRef}
      >
        <button className="overlay__close" onClick={onClose} aria-label="Close" data-skip-focus>
          <Icon name="close" size={22} />
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}
