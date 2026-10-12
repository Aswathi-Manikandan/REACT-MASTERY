import React, { useState } from 'react'

const Number = () => {
    const[state,setState] = useState(20)

  return (
    <div>
        <h1>NUMBER :{state}</h1>
        <button onClick={()=>setState(50)}>50</button>
         <button onClick={()=>setState(100)}>100</button>
          <button onClick={()=>setState(200)}>200</button>
    </div>
  )
}

export default Number