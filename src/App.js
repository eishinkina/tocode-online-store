import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import './assets/scss/main.scss'

// pages:
import HomePage from './pages/Home'
import ProductItemPage from './pages/Home/ProductItem'
import AboutPage from './pages/About'
import NotFoundPage from './pages/NotFound'
import CheckoutPage from 'pages/checkout'

// components:
import { Header, Footer } from './components'

const App = () => {
  return (
    <div className='ui-wrapper'>
      <Header isLogo />
      <div className='ui-content-wrapper'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products/' element={<Navigate to='/' />} />
          <Route path='/products/:itemAlias' element={<ProductItemPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/404' element={<NotFoundPage />} />
          <Route path='*' element={<Navigate to='404' />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
