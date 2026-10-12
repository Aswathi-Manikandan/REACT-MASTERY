import React, { useState } from 'react'

const Counter2 = () => {
    const[count,setCount]=useState(0)
    const incre = ()=>{
        setCount(count<10?count+1:count)
    }
    const decre = ()=>{
        setCount(count>0?count-1:count)
    }
  return (
    <div>
        <p>COUNT :{count}</p>
        <button onClick={incre}>Increment</button>
        <button onClick={decre}>Decrement</button>
    </div>
  )
}

export default Counter2