import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home.jsx'
import ProductInfo from './components/pages/ProductInfo.jsx'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/displayProduct/:productId' element={<ProductInfo />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
