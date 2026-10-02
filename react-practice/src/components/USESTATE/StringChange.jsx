import React, { useState } from 'react'

const StringChange = () => {
    const[student,setStudent] = useState("Aswathi")

    const change = ()=>{
        setStudent("React Developer")
    }
  return (
    <div>
        <button onClick={change}>Click me</button>
        <p>{student}</p>
    </div>
  )
}

export default StringChange