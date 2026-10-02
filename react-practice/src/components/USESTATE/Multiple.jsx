import React, { useState } from 'react'

const Multiple = () => {
    const[name,setName] = useState("Aswathi")
    const[age,setAge] = useState(25)
    const[city,setCity] = useState("kerala")

  return (
    <div>
        <h3>Name :{name}</h3>
        <button onClick={()=>setName("akshay")}>click</button>

        <h3>Age :{age}</h3>
        <button onClick={()=>setAge(20)}>click</button>

        <h3>City :{city}</h3>
        <button onClick={()=>setCity("calicut")}>click</button>
    </div>
  )
}

export default Multiple