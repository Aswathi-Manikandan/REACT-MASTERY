import React, { useState } from 'react'

const Object5 = () => {

    const [user, setUser] = useState({
        name: "Aswathi",
        address: {
            city: "Kochi",
            state: "Kerala"
        }
    })

    const handle = () => {
        setUser({
            ...user,
            address: {
                ...user.address,
                city: "Bangalore"
            }
        })
    }

    return (
        <div>
            <p>{user.name}</p>
            <p>{user.address.city}</p>
            <p>{user.address.state}</p>

            <button onClick={handle}>Click</button>
        </div>
    )
}

export default Object5