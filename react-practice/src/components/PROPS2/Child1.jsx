
import React from 'react'

const Child1 = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>

      <h2>Age: {props.age}</h2>

      <h2>Student : {props.IsStudent?'yes':'no'}</h2>

      <h2>Skills :{props.skills.join(',')}</h2>

      <h2>ADDRESS</h2>
      <p>place : {props.address.place}</p>
      <p>House Name :{props.address.house}</p>
    </div>
  )
}

export default Child1
