import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductInfo = () => {

    let { productId } = useParams()

    let [product, setProduct] = useState({})

    let fetchProductBasedOnId = async () => {
        console.log("fetching product ")
        try {

            let result = await axios.get("http://localhost:5000/api/product")

            if (result.status !== 200) {
                throw new Error("Failed to fetch product based on ID")
            }

            let finalProduct = result.data.filter((product) => {
                return product._id === productId
            })

            console.log("fetched product based on ID: ", finalProduct)

            setProduct(finalProduct[0])

        } catch (err) {
            console.error("Error sorting product based on ID: ", err)
        }
    }

    useEffect(() => {
        fetchProductBasedOnId()
    }, [])

    return (
        <div>
            <h1>this is some product info page</h1>
            <h2>displaying info related to {productId}</h2>

            <div key={product._id} className='product-item'>
                <img src={`http://localhost:5000${product.ProductImageUrl}`} width={200} alt="product" />
                <h1>
                    {product.name}
                </h1>
                <p>
                    {product.description}
                </p>
                <h2>
                    <span>{product.price} Rs </span>
                    <span>discount {product.discount} %</span>
                </h2>
                <button>Add Cart</button>
                <button>Buy Now</button>
            </div>

        </div>
    )
}

export default ProductInfo
