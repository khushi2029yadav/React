import React from 'react'
import { useParams } from 'react-router-dom'

const StudentDetails = () => {
    const{id} = useParams();
     const students = [
    { id: 1, name: "Rahul", marks: 85 },
    { id: 2, name: "Priya", marks: 90 },
    { id: 3, name: "Arjun", marks: 78 },
    { id: 4, name: "Sneha", marks: 95 },
  ];
  const student = students.find((student)=>{
    student.id === Number(id);
  })
  return (
   <>
     <h1>Student Details</h1>
      <p>Name: {student.name}</p>
      <p>Marks: {student.marks}</p>
   </>
  )
}

export default StudentDetails