import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount] = useState(0)

    const incre = ()=>{
        setCount(count+1)
    }

    const decre = ()=>{
        setCount(count-1)
    }

    const reset =()=>{
        setCount(0)
    }
  return (
    <div>
        <h5>CREATING A COUNTER FOR NCREASING DECREASING AND RESET</h5>
        <p>COUNT IS : {count}</p>
        <button onClick={incre}>Increment</button>
        <button onClick={decre}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter