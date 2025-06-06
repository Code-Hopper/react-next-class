import React, { useState, useContext, createContext } from 'react'

// step 1 : to create context that can be shared
let DataContext = createContext()

// step 2 : to create context provider 
const DataProvider = ({ children }) => {

    let [value, setValue] = useState(1000)

    const increaseValue = () => {
        setValue(value + 1000)
    }

    const decreaseValue = () => {
        setValue(value + 1000)
    }

    return (
        <DataContext.Provider value={{ value, increaseValue, decreaseValue }}>
            {children}
        </DataContext.Provider>
    )
}

// step 3 (optional) : to create a custom hook to use our context
const useData = () => useContext(DataContext)

export { DataProvider, useData }