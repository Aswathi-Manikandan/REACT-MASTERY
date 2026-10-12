import React, { useState } from 'react'

const Number1 = () => {
    const[num,setNum] = useState(10)
    const change = ()=>{
        setNum(num===10?20:10)
    }
  return (
    <div>
        <p>NUMBER :{num}</p>
        <button onClick={change}>click</button>
    </div>
  )
}

export default Number1