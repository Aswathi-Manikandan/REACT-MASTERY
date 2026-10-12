import React, { useState } from 'react'

const Count = () => {
    const [text,setText] = useState("")
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <p>Count : {text.length}</p>
    </div>
  )
}

export default Count