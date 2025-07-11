import React from 'react'

import "./Cart.scss"
import { useCart } from '../../../context/CartContext'

const ShowCartItem = ({ item, removeItem }) => {
    return (
        <div key={item._id} className=''>
            <span>{item.name}</span>
            <img width={100} src={`${import.meta.env.VITE_SERVER_ADDRESS}${item.ProductImageUrl}`} alt="" />
            <div>
                <span className='text-2xl text-white font-bold'>qty : {item.qty}</span>
            </div>
            <div>
                <button onClick={() => { removeItem(item._id) }}
                    className='bg-red-500 text-white font-bold'>
                    remove
                </button>
            </div>
        </div>
    )
}

const Cart = () => {

    let { items, removeItem } = useCart()

    console.log(items)

    return (
        <div id='cart'>
            {
                items && items.map(item => <ShowCartItem removeItem={removeItem} item={item} />)
            }
        </div>
    )
}

export default Cart
