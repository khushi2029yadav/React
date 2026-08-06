import React,{memo} from 'react'


const Child = ({demo}) => {
    demo();
    console.log("hanji")
  return (
    <>
    Count
    
    </>
    // <div><h2>Count:{count}</h2>
    // <h3>Result:{result}</h3></div>
  )
}

export default memo(Child)