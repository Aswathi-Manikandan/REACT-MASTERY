import React, { useState } from 'react'

const Object3 = () => {
    const [details,setDetails] = useState({
  name: "Aswathi",
  age: 22,
  city: "Kochi"
})
const update=()=>{
    setDetails({...details,
        age:details.age+2,
        name:'Aaradhya',
        city:'kollam'
    })
}
  return (
    <div>
        <p>Name : {details.name}</p>
        <p>Age :{details.age}</p>
        <p>City:{details.city}</p>

            <button onClick={update}>Update Profile</button>
    </div>
  )
}

export default Object3