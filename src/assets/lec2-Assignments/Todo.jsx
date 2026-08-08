import React, { useEffect, useState } from 'react'

const Todo = () => {
    let [todo, SetTodo]=useState([])
    useEffect(()=>{
        fetch(("https://jsonplaceholder.typicode.com/todos"))
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            SetTodo(data);
        })
    },[])
    const completedTodo = todo.filter((a)=>{
        return a.completed===true;
    })
  return (
    <>
    
    {completedTodo.map((a)=>{
        return(
<div key={a.id}>
            <h3>{a.id}</h3>
            <h3>{a.title}</h3>

        </div>
        )
        
    })}
    </>
  )
}

export default Todo