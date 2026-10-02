import React, { useState } from 'react'

const Boolean = () => {
    const[isOnline,setIsOnline] = useState(false)

    const handleClick = ()=>{
        setIsOnline(!isOnline)
    }

  return (
    <div>
        <h2>Status : {isOnline?"ONLINE":"OFFLINE"}</h2>
        <button onClick={handleClick}>{isOnline?"Go offline":"Go Online"}</button>
    </div>
  )
}

export default Boolean