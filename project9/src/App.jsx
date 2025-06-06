import React from 'react'
import { DataProvider, useData } from './context/Data'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'

const App = () => {
  return (
    <>
      <DataProvider>
        <Comp1 />
        <Comp2 />
      </DataProvider>
    </>
  )
}

export default App
