import React, { useState } from 'react'

const Input2 = () => {
    const[text,setText] = useState("")
    const handleClear = ()=>{
        setText("")
    }
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleClear}> clear</button>
    </div>
  )
}

export default Input2


//Create an input and a Clear button.
