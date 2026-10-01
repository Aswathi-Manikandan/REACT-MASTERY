import React from 'react'
import Child7 from './Child7';

const Parent7 = () => {
    const show =()=>{
        console.log("I am here");
    }

  return (
    <div>
    <Child7 
    handleClick = {show}
    />
    </div>
  )
}

export default Parent7

//THE OUTPUT WILL SHOW IN THEE CONSOLE - LIKE INSPECT THE WEBPAGE 