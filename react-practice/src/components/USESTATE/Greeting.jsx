import React, { useState } from 'react'

const Greeting = () => {
    const[text,seText ] =useState("")
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>seText(e.target.value)} />
        <p>Hello {text}</p>
    </div>
  )
}

export default Greeting