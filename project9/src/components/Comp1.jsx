import React from 'react'

import { useData } from '../context/Data'

const Comp1 = () => {

    let { value, increaseValue, decreaseValue } = useData()

    console.log(value)

    return (
        <div>
            <h1>this is some comp 1 {value} </h1>
            <button onClick={() => { increaseValue() }}>increase</button>
        </div>
    )
}

export default Comp1
