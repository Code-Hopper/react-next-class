import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import Home from "./components/pages/Home.jsx"
import Store from "./components/pages/Store.jsx"
import Dashboard from "./components/pages/Dashboard.jsx"
import Product from './components/pages/Product.jsx'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/product/:id/:name' element={<Product />} />
        </Routes>
      </Router>
    </>   
  )
}

export default App
