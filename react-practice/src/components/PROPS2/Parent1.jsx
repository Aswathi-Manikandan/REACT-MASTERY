import React from 'react'
import Child1 from './Child1'

const Parent1 = () => {
  return (
    <div>
       
        <Child1 
        name='Aswathi' //string
        age = {25} //number
        IsStudent = {true} //boolean
        skills = {['React','Mongodb','js']} //array
        address ={{place :'wayanad',house:'nandanam'}} //object
        />
    </div>
  )
}

export default Parent1


//DIFFERENT DATATYPES