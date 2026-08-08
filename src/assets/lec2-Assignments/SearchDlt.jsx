import React, { useEffect, useState } from 'react'

const SearchDlt = () => {
  const[todo, SetTodo]=useState([])
  const[search,Setsearch]=useState("")
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      SetTodo(data);
    })
  },[])
  const filteredLetter= todo.filter((a)=>{
    return a.title
    .toLowerCase()
    .includes(LowerCase());
  })
  const deleteTodo=(id)=>{
    SetTodo(
      todo.filter((a)=>{
        return a.id !== id;
      })
    )
  }

    
  return (
   <>
   <input 
   value={search}
   onChange={(e)=>Setsearch(e.target.value)}
   ></input>
   {
    filteredLetter.map((a)=>{
      return(
        <div key={a.id}>
          <h3>{a.id}
            </h3>
            <h3>{a.title}</h3>
            <button onClick={()=>deleteTodo(a.id)}>Delete </button> </div>
      )
    })
   }
   </>
  )
}

export default SearchDlt