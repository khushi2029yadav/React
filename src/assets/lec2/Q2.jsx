import React from 'react'

const Q2 = ({name, rollno, course}) => {
    // console.log(props)

  return (
    <div
    style={{
         border: "2px solid black",
         borderRadius:"8px",
        padding: "15px",
        margin: "10px",
        width: "250px",
    }}>
        <h3>Name:{name}</h3>
        <h3>RollNo:{rollno}</h3>
        <h3>Course:{course}</h3>
    </div>
  )
}

export default Q2;