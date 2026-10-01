import React from 'react'

const Child6 = ({name,age=20}) => {
  return (
    <div>
        <h1>Name : {name}</h1>
        <h1>Age:{age}</h1>
    </div>
  )
}

export default Child6

//DEFAULT PROPS