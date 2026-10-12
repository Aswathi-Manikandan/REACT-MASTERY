import React, { useState } from 'react'

const Form1 = () => {
    const [name,setName] = useState("")
    const [age,setAge]=useState('')
    const[email,setEmail]=useState("")
    const[city,setCity]= useState("")
     
    const handleReset = () => {
    setName("")
    setAge("")
    setEmail("")
    setCity("")
}
  return (
    <div>
        <label>Enter your name :</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <label>Enter your age :</label>
         <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/><br/>
        <label>Enter your email :</label>
         <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <label>Enter your city :</label>
        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/><br/>
       <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Form1