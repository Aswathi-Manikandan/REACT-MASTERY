import React, { useState } from 'react'

const Object1 = () => {
    const [details,setDetails] = useState({
  name: "Aswathi",
  age: 22,
  city: "Kochi"
})
  return (
    <div>
        <p>Name : {details.name}</p>
        <p>Age :{details.age}</p>
        <p>City:{details.city}</p>
    </div>
  )
}

export default Object1