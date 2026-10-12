
import React, { useState } from 'react'

const Counter4 = () => {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={increase}>Increase by 3</button>
        </div>
    )
}

export default Counter4
//Create a counter starting at 0. Add a button that increases the counter by 3 using three state-update 
// calls in the same click handler. Make sure all three increments are reflected in the final value.