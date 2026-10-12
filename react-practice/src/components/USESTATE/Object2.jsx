import React, { useState } from 'react'

const Object2 = () => {
    const [details,setDetails] = useState({
  name: "Aswathi",
  age: 22,
  city: "Kochi"
})
const update=()=>{
    setDetails({...details,age:details.age+2})
}
  return (
    <div>
        <p>Name : {details.name}</p>
        <p>Age :{details.age}</p>
        <p>City:{details.city}</p>

            <button onClick={update}>Increase Age</button>
    </div>
  )
}

export default Object2