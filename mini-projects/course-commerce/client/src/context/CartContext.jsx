import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({ children }) => {

    let [items, setItems] = useState([])

    const addItem = (item) => {

        // while adding item
        // look up for same item again
        // if present change qty++.
        setItems((prev) => {

            let exists = false

            let existingItem = prev.filter((element) => {
                if (element._id === item._id) {
                    exists = true
                    return false
                }
                return true
            })

            if (exists) {
                let oldItem = prev.filter((i) => { return i._id === item._id })[0]
                return [...existingItem, { ...oldItem, qty: oldItem.qty + 1 }];
            } else {
                return [...existingItem, { ...item, qty: 1 }]
            }

        })
    }

    const removeItem = (_id) => {
        console.log(_id)
        // setItems((prev) => { return prev.filter((element) => { return element._id !== _id }) })
        // explicit return
        setItems(prev => prev.filter(element => element._id !== _id ) )
        // implicit return
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
