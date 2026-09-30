import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <h1>PARENT COMPONENT</h1>
        <Child name="Aswathi" age={25}/>
    </div>
  )
}

export default Parent