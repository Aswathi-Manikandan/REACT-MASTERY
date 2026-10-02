import React, { useState } from 'react'

const ShowHide = () => {
    const[status,setStatus] = useState(true)

    const handleClick = ()=>{
        setStatus(!status)
    }

  return (
    <div>
        {status && <p>This is the secret message</p>}
        <button onClick={handleClick}>{status ? 'hide':'show'}</button>
    </div>
  )
}

export default ShowHide