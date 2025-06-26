import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import Home from "./components/pages/Home.jsx"
import { CourseProvider } from './context/CourseContext.jsx'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
