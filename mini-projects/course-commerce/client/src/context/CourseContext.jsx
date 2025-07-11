import React, { createContext, useContext, useEffect, useState } from 'react'

import { FetchCourses, FetchCourseBasedOnId, FetchCourseBasedOnName } from '../api/CourseMethods'

const courseContext = createContext()

const CourseProvider = ({ children }) => {

    let [courses, setCourses] = useState([])


    const getCourses = async () => {

        try {

            let data = await FetchCourses()

            if (data) {
                setCourses(data)
            } else {
                console.log("no data found please try again later !")
                setCourses([])
            }
        } catch (err) {
            console.log("error from course context |failed to fetch data : ", err)
        }
    }

    const getCourseBasedOnId = (id) => {

        let filtredCourse = courses.filter((course)=>{
            return course._id == id
        })
        
        console.log(filtredCourse)

        return filtredCourse[0]

    }

    return (
        <courseContext.Provider value={{ courses, getCourses, getCourseBasedOnId }}>
            {children}
        </courseContext.Provider>
    )
}

const useCourse = () => useContext(courseContext)

export { CourseProvider, useCourse }
