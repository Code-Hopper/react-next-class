import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Page404 from './components/pages/Page404.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/:name/contact/' element={<Contact />} />

          <Route path='*' element={<Page404 />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
