import axios from "axios";

let backendUrl = import.meta.env.SERVER_ADDRESS

import courses from "../database/courses.js"

const FetchCourses = () => {
    // make a call to backend(server) to get all the courses with any filter
    return Array.isArray(courses) ? courses : false 
}

const FetchCourseBasedOnName = async () => {
    // make a call to backend(server) to get the course with name filter
}

const FetchCourseBasedOnId = async () => {
    // make a call to backend(server) to get the course with id filter
}

export { FetchCourses, FetchCourseBasedOnName, FetchCourseBasedOnId }