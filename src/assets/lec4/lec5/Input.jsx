import React, { useEffect, useState } from 'react'

const Input = () => {
    let[input, setInput] = useState("");

    useEffect(()=>{
 const savedInput = localStorage.getItem("msg",input);
 if(savedInput){
    setInput(savedInput);
 }
    },[]);
    useEffect(()=>{
        localStorage.setItem("msg",input);
         console.log(localStorage.getItem("msg"));
    },[input]);
   


  return (
    <div>
          <h2>{input}</h2>
        <input
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        ></input>
      
    </div>
  )
}

export default Input