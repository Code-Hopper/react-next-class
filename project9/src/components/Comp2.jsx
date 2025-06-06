import React from 'react'

import { useData } from '../context/Data'

const Comp2 = () => {

    let { value, increaseValue, decreaseValue } = useData()

    return (
        <div>
            <button onClick={()=>{increaseValue()}}>comp2 button</button>
        </div>
    )
}

export default Comp2
