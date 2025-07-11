import axios from "axios";

let backendUrl = import.meta.env.VITE_SERVER_ADDRESS

console.log(backendUrl)

const FetchCourses = async () => {
    // fetch all courses
    const result = await axios({
        method: "get",
        url: `${backendUrl}/api/product`
    })

    if (result.status != 200) {
        console.log("unable to fetch course data !")
        throw new Error("Failed to fetch courses data from backend !")
    }

    return result.data
}

const FetchCourseBasedOnName = async () => {
    // make a call to backend(server) to get the course with name filter
}

const FetchCourseBasedOnId = async () => {
    // make a call to backend(server) to get the course with id filter
}

export { FetchCourses, FetchCourseBasedOnName, FetchCourseBasedOnId }