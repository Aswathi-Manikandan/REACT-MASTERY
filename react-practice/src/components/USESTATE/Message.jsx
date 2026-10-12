import React, { useState } from 'react'

const Message = () => {
    const[text,setText] =useState("welcome")
  return (
    <div>
        <p>Message:{text}</p>
        <button onClick={()=>{setText("Good morning")}}>button1</button>
        <button onClick={()=>setText("hello")}>button2</button>
    </div>
  )
}

export default Message