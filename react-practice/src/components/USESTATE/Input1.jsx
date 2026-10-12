import React, { useState } from 'react'

const Input1 = () => {
    const[name,setName] = useState("")

  return (
    <div>
        <label>Enter your name :</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <p>You have Entered :{name}</p>
    </div>
  )
}

export default Input1