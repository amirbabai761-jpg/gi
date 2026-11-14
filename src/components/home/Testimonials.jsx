import React, { useEffect, useRef, useState } from 'react'
import Icon from '../Icon.jsx'
import SectionHead from '../SectionHead.jsx'
import { Stars } from '../QuickView.jsx'
import { testimonials } from '../../data/catalog.js'

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(3)
  const trackRef = useRef(null)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const measure = () => {
      const width = window.innerWidth
      setPerView(width < 700 ? 1 : width < 1080 ? 2 : 3)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    const measureStep = () => {
      const track = trackRef.current
      if (!track || !track.firstElementChild) return
      const gap = parseFloat(getComputedStyle(track).columnGap || '24')
      setStep(track.firstElementChild.getBoundingClientRect().width + gap)
    }
    measureStep()
    const t = setTimeout(measureStep, 300)
    window.addEventListener('resize', measureStep)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', measureStep)
    }
  }, [perView])

  const maxIndex = Math.max(0, testimonials.length - perView)
  const current = Math.min(index, maxIndex)

  const go = (dir) => setIndex((i) => Math.min(Math.max(0, i + dir), maxIndex))

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="testimonials__head">
          <SectionHead eyebrow="سخن مشتریان" title="سرمایهٔ مشتریان ما" />
          <div className="carousel-nav">
            <button onClick={() => go(-1)} disabled={current === 0} aria-label="نظر پیشین">
              <Icon name="arrowLeft" size={17} />
            </button>
            <button onClick={() => go(1)} disabled={current >= maxIndex} aria-label="نظر بعدی">
              <Icon name="arrowRight" size={17} />
            </button>
          </div>
        </div>

        <div className="carousel-viewport">
          <ul
            className="carousel-track"
            ref={trackRef}
            style={{ transform: `translateX(-${current * step}px)` }}
          >
            {testimonials.map((item) => (
              <li className="testimonial" key={item.name}>
                <Icon name="quote" size={26} stroke={0} className="testimonial__quote" />
                <Stars value={item.rating} size={13} />
                <blockquote>{item.quote}</blockquote>
                <footer>
                  <span className="testimonial__avatar">{item.name.charAt(0)}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <span>
                      {item.location} · {item.piece}
                    </span>
                  </div>
                </footer>
              </li>
            ))}
          </ul>
        </div>

        <div className="carousel-dots" role="tablist" aria-label="صفحه‌های نظر">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={i === current ? 'is-active' : ''}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-selected={i === current}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
