import React from 'react'

const Child7 = (props) => {
  return (
    <div>
        <button onClick={props.handleClick}>CLICK ME</button>
    </div>
  )
}

export default Child7

//FUNCTION AS A PROP :  Function as a prop means passing a function from a parent component 
// to a child component through props.
//The child component can then call that function when something happens, such as a button click.