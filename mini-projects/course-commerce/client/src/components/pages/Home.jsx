import React, { useEffect } from 'react'
import { useCourse } from '../../context/CourseContext'
import Cart from '../sections/cart/Cart'
import { useCart } from '../../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Home = () => {

  let { courses, getCourses } = useCourse()

  let { addItem } = useCart()

  let navigate = useNavigate()

  let [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })

  let handleChange = (e) => {
    let { name, value } = e.target

    setFormData(prev => {
      return { ...prev, [name]: value }
    })

  }


  let handleSubmit = async (e) => {
    e.preventDefault()
    try {

      let result = await axios({
        method: "post",
        url: "http://localhost:5000/send",
        data: formData
      })

      if (result.status != 202) {
        throw ("error whiling send data")
      }

      alert(result.data.message)

    } catch (err) {
      console.log("unable to send data to backend ! ", err)
      alert(err)
    }
  }

  useEffect(() => {
    getCourses()
  }, [])

  console.log("courses : ", courses)

  return (
    <>
      <Link to="/store">go to store</Link>
      <div className='p-5'>
        <h1 className='font-bold text-3xl'>
          welcome to course-commerce
        </h1>

        <div>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="name" placeholder='enter name' />
            <input onChange={handleChange} type="tel" name="phone" placeholder='enter phone' />
            <input onChange={handleChange} type="email" name="email" placeholder='enter email' />
            <button type='submit' className='bg-cyan-100 p-2'>submit</button>
          </form>
        </div>

        {
          courses.map(
            (item, index) => {
              return (
                <div onClick={() => { navigate(`/product/${item._id}/${item.name}`) }} key={index}>
                  <h1 className='text-2xl font-bold'>{item.name}</h1>
                  <img width={200} src={`${import.meta.env.VITE_SERVER_ADDRESS}${item.ProductImageUrl}`} alt="" />
                  <button className='bg-amber-500 p-5 text-white font-bold' onClick={() => { addItem(item) }}>add to cart</button>
                </div>
              )
            }
          )
        }
      </div>
      <Cart />
    </>
  )
}

export default Home
