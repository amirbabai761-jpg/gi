import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/base.css'
import './styles/chrome.css'
import './styles/home.css'
import './styles/shop.css'
import './styles/product.css'
import './styles/pages.css'
import './styles/gift.css'
import './styles/legal.css'
import './styles/overlays.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
