
import React, { useState } from 'react'

const Counter6 = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if (count < 100) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <h3>Count: {count}</h3>

            <button
                onClick={decrement}
                disabled={count === 0}
            >
                Decrement
            </button>

            <button
                onClick={increment}
                disabled={count === 10}
            >
                Increment
            </button>
        </div>
    )
}

export default Counter6
