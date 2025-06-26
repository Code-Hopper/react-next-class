import React, { createContext, useContext, useEffect, useState } from 'react'

import { FetchCourses, FetchCourseBasedOnId, FetchCourseBasedOnName } from '../api/CourseMethods'

const courseContext = createContext()

const CourseProvider = ({ children }) => {

    let [courses, setCourses] = useState([])

    const getCourses = () => {
        let data = FetchCourses()

        if (data) {
            setCourses(data)
        } else {
            console.log("no data found please try again later !")
            setCourses([])
        }
    }

    useEffect(() => {
        getCourses()
    }, [])

    return (
        <courseContext.Provider value={{ courses }}>
            {children}
        </courseContext.Provider>
    )
}

const useCourse = () => useContext(courseContext)

export { CourseProvider, useCourse }
