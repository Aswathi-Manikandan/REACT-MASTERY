import React from 'react'

const User = (props) => {
  return (
    <div>
      <h2>USER DETAIL</h2>

      {props.isLogged ? (
        <h3>Welcome {props.name}</h3>
      ) : (
        <h3>Please login</h3>
      )}
    </div>
  )
}

export default User