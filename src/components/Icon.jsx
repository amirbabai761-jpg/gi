import React from 'react'

const paths = {
  search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></>,
  user: <><circle cx="12" cy="8" r="3.6" /><path d="M4.8 20c.9-3.6 3.7-5.4 7.2-5.4s6.3 1.8 7.2 5.4" /></>,
  heart: <path d="M12 20s-7.4-4.6-7.4-9.5A4.1 4.1 0 0 1 12 7.4a4.1 4.1 0 0 1 7.4 3.1C19.4 15.4 12 20 12 20Z" />,
  bag: <><path d="M5.5 8h13l1 12h-15l1-12Z" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" /></>,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  arrowRight: <path d="M4 12h15m-6-6 6 6-6 6" />,
  arrowLeft: <path d="M20 12H5m6-6-6 6 6 6" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  chevronRight: <path d="m9 6 6 6-6 6" />,
  chevronLeft: <path d="m15 6-6 6 6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  star: <path d="m12 3.6 2.5 5.3 5.7.7-4.2 3.9 1.1 5.6-5.1-2.8-5.1 2.8 1.1-5.6L3.8 9.6l5.7-.7L12 3.6Z" />,
  diamond: <><path d="M7 4h10l4 5.5L12 21 3 9.5 7 4Z" /><path d="M3 9.5h18M12 21 8.5 9.5 12 4l3.5 5.5L12 21Z" /></>,
  lock: <><rect x="5" y="10.5" width="14" height="9.5" rx="2" /><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" /></>,
  gift: <><rect x="3.5" y="8.5" width="17" height="4" rx="1" /><path d="M5.5 12.5V20h13v-7.5M12 8.5V20" /><path d="M12 8.5S9 8 8 6.6C7.1 5.3 8 3.8 9.4 4c2 .3 2.6 4.5 2.6 4.5Zm0 0s3-.5 4-1.9c.9-1.3 0-2.8-1.4-2.6-2 .3-2.6 4.5-2.6 4.5Z" /></>,
  globe: <><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.6 2.4 4 5.3 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.3-4-8.5s1.4-6.1 4-8.5Z" /></>,
  refresh: <><path d="M20 12a8 8 0 1 1-2.6-5.9" /><path d="M20 4v4.5h-4.5" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  zoom: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5M11 8.5v5M8.5 11h5" /></>,
  filter: <path d="M4 7h16M7 12h10M10 17h4" />,
  instagram: <><rect x="4" y="4" width="16" height="16" rx="4.5" /><circle cx="12" cy="12" r="3.8" /><circle cx="17" cy="7" r=".9" fill="currentColor" stroke="none" /></>,
  pinterest: <><circle cx="12" cy="12" r="8.5" /><path d="M10 20c1-3.2 2-6.4 2-6.4s-.5-.9-.5-2.2c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.6 0 1-.6 2.4-.9 3.7-.3 1.1.5 2 1.7 2 2 0 3.3-2.5 3.3-5 0-2.3-1.6-4-4.2-4-3 0-4.9 2.2-4.9 4.6 0 .9.3 1.6.8 2.1" /></>,
  facebook: <path d="M14.5 8.5H17V5.5h-2.6c-2 0-3.4 1.4-3.4 3.5v2H9v3h2V21h3v-7h2.4l.5-3h-2.9V9.4c0-.6.2-.9.5-.9Z" />,
  mail: <><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4.5 7 7.5 6 7.5-6" /></>,
  phone: <path d="M6 4h3l1.5 4-2 1.5a10 10 0 0 0 5 5L15 12.5 19 14v3a2 2 0 0 1-2 2A13 13 0 0 1 4 6a2 2 0 0 1 2-2Z" />,
  pin: <><path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" /><circle cx="12" cy="11" r="2.2" /></>,
  quote: <path d="M9 6c-3 1.4-4.5 4.2-4.5 8.5V18h5.4v-5.2H6.7c0-2 .8-3.4 2.6-4.3L9 6Zm9 0c-3 1.4-4.5 4.2-4.5 8.5V18h5.4v-5.2h-3.2c0-2 .8-3.4 2.6-4.3L18 6Z" />,
  sparkle: <><path d="M12 3.5c.7 4.2 1.8 5.3 6 6-4.2.7-5.3 1.8-6 6-.7-4.2-1.8-5.3-6-6 4.2-.7 5.3-1.8 6-6Z" /><path d="M18.5 15.5c.3 1.8.8 2.3 2.5 2.5-1.7.2-2.2.7-2.5 2.5-.3-1.8-.8-2.3-2.5-2.5 1.7-.2 2.2-.7 2.5-2.5Z" /></>,
  truck: <><path d="M3 7h10v9H3zM13 10h4l3 3v3h-7" /><circle cx="7" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /></>,
  scissors: <><circle cx="6" cy="7" r="2.5" /><circle cx="6" cy="17" r="2.5" /><path d="m8 8.5 11 8M8 15.5l11-8" /></>,
}

export default function Icon({ name, size = 20, stroke = 1.2, className = '', filled = false }) {
  const content = paths[name]
  if (!content) return null
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {content}
    </svg>
  )
}
