import React, { useState } from 'react'

const Counter1 = () => {
    const[count,setCount]=useState(0)
    const incre = ()=>{
        setCount(count+1)
    }
    const decre = ()=>{
        setCount(prev=>prev-2)
    }
  return (
    <div>
        <p>COUNT :{count}</p>
        <button onClick={incre}>Increment</button>
        <button onClick={decre}>Decrement</button>
    </div>
  )
}

export default Counter1