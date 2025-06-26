import React from 'react'
import { useCourse } from '../../context/CourseContext'

const createCourseCard = (props) => {
  return (
    <div key={props.id} className='flex flex-col py-20'>
      <span className='font-bold text-3xl'>{props.title}</span>
      <span>{props.duration}</span>
      <span>{props.fees}</span>
      <span>{props.id}</span>
      <span>{props.instructor}</span>
      {
        props.reviews.map((review, index) => {
          return (<div key={index} className='flex flex-col'>
            <span>{review.user}</span>
            <span>{review.rating}</span>
            <span>{review.comment}</span>
          </div>)
        })
      }
      <div>
        <button className='bg-green-300 font-bold text-black p-3'>Add to Cart</button>
      </div>
    </div>
  )
}

const Home = () => {

  let { courses } = useCourse()

  console.log(courses)

  return (
    <div className='p-5'>
      <h1 className='font-bold text-3xl'>
        welcome to course-commerce
      </h1>
      {
        courses.map(createCourseCard)
      }
    </div>
  )
}

export default Home
