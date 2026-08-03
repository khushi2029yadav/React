import React, { useState } from 'react'

const ToDoList = () => {
    let[task, setTask] = useState("")
    let[tasks, setTasks] = useState([])
    function addTask(){
        setTasks([...tasks, task])
        setTask("")
    }
  return (
    <div>
        <h3>ToDoList</h3>
        <input
        type="text"
        placeholder="enter task"
        value ={task}
        onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={addTask}>add</button>
        <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList