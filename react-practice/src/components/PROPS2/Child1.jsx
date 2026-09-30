
import React from 'react'

const Child1 = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>

      <h2>Age: {props.age}</h2>

      <h2>Student: {props.IsStudent ? 'Yes' : 'No'}</h2>

      <h2>Skills:</h2>
      <p>{props.skills.join(', ')}</p>

      <h2>Address:</h2>
      <p>Place: {props.address.place}</p>
      <p>House: {props.address.house}</p>
    </div>
  )
}

export default Child1
