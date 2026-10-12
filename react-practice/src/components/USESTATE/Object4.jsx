import React, { useState } from 'react'

const Object4 = () => {

    const [user, setUser] = useState({
        name: "Aswathi",
        age: 22,
        city: "Kochi"
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>

            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
            />

            <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleChange}
            />

            <input
                type="text"
                name="city"
                value={user.city}
                onChange={handleChange}
            />

            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>

        </div>
    )
}

export default Object4