import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AdminPage from "./components/AdminPage"
import HomePage from "./components/HomePage.jsx"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
