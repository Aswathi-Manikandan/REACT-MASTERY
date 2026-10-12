
import React, { useState } from 'react'

const Counter7 = () => {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('')

    const increment = () => {
        if (count >= 10) {
            setMessage('Maximum reached')
        } else {
            setCount(count + 1)
            setMessage('')
        }
    }

    const decrement = () => {
        if (count <= 0) {
            setMessage('Minimum reached')
        } else {
            setCount(count - 1)
            setMessage('')
        }
    }

    return (
        <div>
            <p>COUNT: {count}</p>
            <p>{message}</p>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter7
