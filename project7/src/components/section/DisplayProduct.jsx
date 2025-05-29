import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DisplayProduct = () => {

  let [products, setProducts] = React.useState([])

  let navigate = useNavigate()

  let fetchProducts = async () => {
    try {
      let result = await axios({
        url: "http://localhost:5000/api/product",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

      if (result.status !== 200) {
        throw new Error("Failed to fetch products")
      }

      console.log("fetchted products : ", result)

      setProducts(result.data)

    } catch (err) {
      console.error("Error fetching products: ", err)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <div className='product-grid'>

        {

          products.map((product) => {
            return (
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
                <button onClick={() => {
                  navigate(`/displayProduct/${product._id}`)
                }}>view</button>
              </div>
            )
          })

        }

      </div>
    </>
  )
}

export default DisplayProduct
