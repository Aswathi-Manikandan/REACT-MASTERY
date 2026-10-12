import React, { useState } from 'react'

const Counter3 = () => {
    const[state,setState] = useState(0)
    const[amount,setAmount] = useState(1)

    const change = ()=>{
        setState(state+Number(amount))
    }
  return (
    <div>
        <h3>Counter:{state}</h3>
        <label>Enter Number</label>
       <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
       <button onClick={change}>add</button>
    </div>
  )
}

export default Counter3