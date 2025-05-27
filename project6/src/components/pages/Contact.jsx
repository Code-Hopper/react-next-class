import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {

    const { name } = useParams()

    return (
        <div>
            <h1>contact page</h1>
            <h2>{name}</h2>
        </div>
    )
}

export default Contact
