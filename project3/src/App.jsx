import React from 'react'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import Comp1 from './components/Comp1'

const App = () => {
  return (
    <div>
      <h1 className='text-danger fw-bolder'>Hello React.js</h1>
      <Comp1 />
    </div>
  )
}

export default App
