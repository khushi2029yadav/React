import React, { useEffect, useState } from 'react'

const DisplayOnly10 = () => {
    const[todo, SetTodo]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            return res.json();
            
        })
        .then((data)=>{
            SetTodo(data);
        })
    },[])
  return (
    <>
        {todo.slice(0, 10).map((a) => {
                return (
                    <div key={a.id}>
                        <p>{a.id}</p>
                        <p>{a.title}</p>
                    </div>
                );
        })}

    </>
  )
}

export default DisplayOnly10