import React, { useEffect, useState } from 'react'

const DeleteTodo = () => {
   const[todo, SetTodo]= useState([])
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        SetTodo(data);
    })
   },[])
   const deleteTodo =(id)=>{
const updatTodo= todo.filter((a)=>{
    return a.id!==id;
   });
   SetTodo(updatTodo);
   }
   

  return (
    <>
    {
        todo.map((a)=>{
            return(
                <div key={a.id}>
                    <h3>{a.id}</h3>
                    <h3>{a.title}</h3>
                    <button onClick={()=>deleteTodo(a.id)}>Delete</button>
                </div>
                
            )
        })
    }
    </>
  )
}

export default DeleteTodo