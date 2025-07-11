import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    let [user, setUser] = useState(true)

    let [loading, setLoading] = useState(true)

    let [message, setMessage] = useState("")

    let navigate = useNavigate()
    
    useEffect(() => {
        async function accessCheck() {
            try {
                if (!user) {
                    throw ("user is valid")
                }

                setMessage("access granted !")

            } catch (err) {
                console.log('invalid user : ', err)
                navigate("/")
                setMessage("access rejected !")
            } finally {
                setLoading(false)
            }
        }

        accessCheck()
    }, [])

    if (loading) {
        return <h1>loading....</h1>
    }

    return (
        <div>
            this is dashboard page

            {
                message && <h1>{message}</h1>
            }

            <video controls autoPlay loop src="https://res.cloudinary.com/dkfvgx5c5/video/upload/v1750918922/wx5cvl68zbwgratzntcb.mp4"></video>

        </div>
    )
}

export default Dashboard
