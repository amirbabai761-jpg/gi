import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero.jsx'
import CategoryStrip from '../components/home/CategoryStrip.jsx'
import EditorialGrid from '../components/home/EditorialGrid.jsx'
import BridalBanner from '../components/home/BridalBanner.jsx'
import BrandStory from '../components/home/BrandStory.jsx'
import ServicesBar from '../components/home/ServicesBar.jsx'
import TestimonialCarousel from '../components/home/Testimonials.jsx'
import JournalGrid from '../components/home/JournalGrid.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Icon from '../components/Icon.jsx'
import { getProduct } from '../data/catalog.js'

const homePicks = [
  'aurora-solitaire-ring',
  'sersaphine-pendant',
  'solene-hoop-earrings',
  'eclat-diamond-studs',
  'aurelia-tennis-bracelet',
  'lumiere-diamond-band',
  'velvet-pearl-strand',
  'mirabelle-chain-bracelet',
]
  .map(getProduct)
  .filter(Boolean)

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <EditorialGrid />

      <section className="section featured">
        <div className="container">
          <SectionHead
            eyebrow="انتخاب امضای ما"
            title="محبوب‌ترین‌ها"
            copy="قطعه‌هایی که مشتریان ما برایشان بازمی‌گردند — و دیگر از دستشان درنمی‌آورند."
            link="/shop?sort=featured"
            linkLabel="دیدن همهٔ پرفروش‌ها"
          />
          <div className="product-grid">
            {homePicks.map((product, i) => (
              <ProductCard key={product.id} product={product} priority={i < 4} />
            ))}
          </div>
          <div className="featured__foot">
            <p>
              <Icon name="sparkle" size={16} />حکاکی، کادوپیچ و ارسال بیمه‌شدهٔ رایگان برای همهٔ سفارش‌ها.</p>
            <Link className="btn btn--outline" to="/shop">خرید همهٔ مجموعه<Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <BridalBanner />
      <BrandStory />
      <ServicesBar />
      <TestimonialCarousel />
      <JournalGrid />
    </>
  )
}
