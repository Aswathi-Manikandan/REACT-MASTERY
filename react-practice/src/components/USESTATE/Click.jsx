import React, { useState } from 'react'

const Click = () => {
    const[count,setCount] = useState(0)
  return (
    <div>
        <p>Clicked {count} times</p>
        <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}

export default Click