import React from 'react'
import { useNavigate } from 'react-router-dom'

const Studentslist = () => {
    const navigate = useNavigate();

    const students = [
    { id: 1, name: "Rahul", marks: 85 },
    { id: 2, name: "Priya", marks: 90 },
    { id: 3, name: "Arjun", marks: 78 },
    { id: 4, name: "Sneha", marks: 95 },
  ];
  return (
    <>
    <h1>Students List</h1>
    {
      
        students.map((student)=>{
            <div key={student.id}>
                <button onClick={()=>navigate(`/students/${student.id}`)}>{students.name}</button>
            </div>
        })
    }
    </>
  )
}

export default Studentslist