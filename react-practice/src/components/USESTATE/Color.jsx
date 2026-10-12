import React, { useState } from 'react'

const Color = () => {
    const[color,setColor] = useState("pink")
  return (
    <div style={{
        width:"300px",
        height:"400px",
        backgroundColor:color
    }}>
        <button onClick={()=>setColor("green")}>button1</button>
        <button onClick={()=>setColor("yellow")}>button2</button>
        <button onClick={()=>setColor("blue")}>button3</button>
    </div>
  )
}

export default Color