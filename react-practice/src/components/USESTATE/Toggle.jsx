import React, { useState } from 'react'

const Toggle = () => {
    const [tog, setTog] = useState(true)

    const handleClick = () => {
        setTog(!tog)
    }

    return (
        <div>
            <button onClick={handleClick}>
                {tog ? "On" : "Off"}
            </button>
        </div>
    )
}

export default Toggle