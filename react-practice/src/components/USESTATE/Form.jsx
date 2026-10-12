import React, { useState } from 'react'

const Form = () => {
    const [name,setName] = useState("")
    const [age,setAge]=useState('')
    const[email,setEmail]=useState("")
    const[city,setCity]= useState("")
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
        <p>{name}</p>
        <p>{age}</p>
        <p>{email}</p>
        <p>{city}</p>
    </div>
  )
}

export default Form