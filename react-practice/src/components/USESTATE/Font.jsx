import React, { useState } from 'react'

const Font = () => {
    const[size,setSize] = useState(15)
  return (
    <div>
        <p style={{fontSize :`${size}px`}}>HELLO REACT</p>
        <button onClick={()=>setSize(20)}> size1</button>
         <button onClick={()=>setSize(30)}> size2</button>
          <button onClick={()=>setSize(40)}> size3</button>
    </div>
  )
}

export default Font