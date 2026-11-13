import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { StoreProvider } from './store/StoreContext.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import SearchOverlay from './components/SearchOverlay.jsx'
import MobileNav from './components/MobileNav.jsx'
import AccountPanel from './components/AccountPanel.jsx'
import QuickView from './components/QuickView.jsx'
import ToastStack from './components/ToastStack.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Wishlist from './pages/Wishlist.jsx'
import About from './pages/About.jsx'
import Journal from './pages/Journal.jsx'
import JournalPost from './pages/JournalPost.jsx'
import Checkout from './pages/Checkout.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname, search } = useLocation()
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, search])
  return null
}

export default function App() {
  return (
    <StoreProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalPost />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay />
      <MobileNav />
      <AccountPanel />
      <QuickView />
      <ToastStack />
    </StoreProvider>
  )
}
