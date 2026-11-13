import React from 'react'
import Icon from '../Icon.jsx'
import { services } from '../../data/catalog.js'

export default function ServicesBar() {
  return (
    <section className="services" aria-label="Our services">
      <div className="container services__inner">
        {services.map((service) => (
          <div className="service" key={service.title}>
            <Icon name={service.icon} size={24} stroke={1} />
            <div>
              <strong>{service.title}</strong>
              <p>{service.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
