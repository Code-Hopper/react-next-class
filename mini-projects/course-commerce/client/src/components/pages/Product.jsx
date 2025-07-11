import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCourse } from '../../context/CourseContext'

const Product = () => {
    // params
    let { id, name } = useParams()

    let { getCourseBasedOnId } = useCourse()

    let [data, setData] = useState()

    useEffect(() => {

        let result = getCourseBasedOnId(id)

        setData(result)

    }, [])

    return (
        <div>
            {

                data ?
                    <div>
                        <h1>{data.name}</h1>
                        <h1>{data.price}</h1>
                        <h1>{data.discription}</h1>
                        <h1>
                            <img width={200} src={`${import.meta.env.VITE_SERVER_ADDRESS}${data.ProductImageUrl}`} alt="" />
                        </h1>
                    </div> : "loading"
            }

        </div>
    )
}

export default Product
