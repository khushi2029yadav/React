// import React, { useState } from "react";
// import Counter from "./assets/Counter";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h3>{count}</h3>

//       <button onClick={() => setCount(count + 1)}>Increment</button>

//       <button onClick={() => setCount(count - 1)}>Decrement</button>

//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }

// function ThemeToggle() {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   return (
//     <div
//       style={{
//         backgroundColor: isDarkTheme ? "#222" : "white",
//         color: isDarkTheme ? "white" : "black",
//         padding: "30px",
//         borderRadius: "10px",
//         textAlign: "center",
//       }}
//     >
//       <h2>{isDarkTheme ? "Dark Theme" : "Light Theme"}</h2>

//       <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
//         Switch to {isDarkTheme ? "Light" : "Dark"} Theme
//       </button>
//     </div>
//   );
// }

// function BackgroundChanger() {
//   const [color, setColor] = useState("white");

//   return (
//     <div
//       style={{
//         backgroundColor: color,
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         gap: "20px",
//       }}
//     >
//       <Counter />

//       <ThemeToggle />

//       <button
//         onClick={() =>
//           setColor(color === "white" ? "lightblue" : "white")
//         }
//       >
//         Change Background
//       </button>
//     </div>
//   );
// }

// function App() {
//   // 
//   <Counter/>
// }

// export default App;
// import React, { useState } from 'react'
// import Q1 from './assets/Q1';
// import Q2 from './assets/Q2';
// const App = () => {
//   return (
//     <>
//       <h3>Student Details</h3>
//       <Q2
//         name="Khushi"
//         rollno="10"
//         course="Btech" />
//       <Q2
//         name="Adi"
//         rollno="15"
//         course="BBA" />
//       <Q2
//         name="Im"
//         rollno="18"
//         course="MBA"
//       />

//     </>

//   );
// };

// export default App

// import React, { use, useState } from 'react'
// import Controls from './assets/Controls';
// import Display from './assets/Display';
// const App = () => {
//   const[count, setCount] = useState(0);

//   return (
//     <div>
//       <h3>Hiiiiii</h3>
//       <Display count ={count}/>
//       <Controls count={count} setCount={setCount}/>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import React, { use, useState } from 'react'
// import Navbar from './assets/lec3/Navbar'
// import Home from './assets/Home'
// import About from './assets/lec3/About'


// import Badge from './assets/Badge';



// const App = () => {
//   const[task, setTask] = useState(["Task1", "Task2"]);
// const[input, setInput] = useState("")
// const handleAdd = ()=>{
  
//   if(input === ""){
//     alert("Add a task");
//     return;
//   }
//   setTask([...task, input]);
//   //state update karte waqt setTask([...task, input]) likhte hain. Kya task.push(input) karke bhi kr sakte hai 
//   setInput("");
// }

//   return (
//     <div>
//       <h1>To Do List</h1>
//       <Badge total ={task.length}/>
//       <input
//       type='text'
//       placeholder='Enter Task'
//       value={input}
//       onChange={(e)=>setInput(e.target.value)}/>
//       <button onClick={handleAdd}>Add</button>
//       <ul>
//         {task.map((task, index)=>(
//           <li key={index}>{task}</li> 
//         ))}
//       </ul>

//     </div>
//   )
// }

// export default App


// import React, { use, useState } from 'react'
// import Navbar from './assets/lec3/Navbar'
// import Home from './assets/Home'
// import List from './assets/lec3/List'
// import ProductD from './assets/lec3/ProductD'

// import { Route, Routes } from 'react-router-dom'
// import ProductList from './assets/lec3/ProductList'
// const App = () => {
//   return (
//     <div>
//       <Navbar>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           {/* <Route path="/about" element={<About/>}/> */}
//           <Route path="/list" element={<ProductList/>}/>
//           <Route path="/p/:id" element={<ProductD/>}/>


//         </Routes>
//       </Navbar>


//     </div>
//   )
// }

// export default App




// import React from 'react'
// // import { Route, Routes } from 'react-router-dom'
// // import Home from './assets/Home'
// // import Navbar from './assets/lec3/Navbar'
// // import About from './assets/lec3/About'
// // import ProductList from './assets/lec3/ProductList'
// import UseReducerDemo from './assets/lec4/UseReducerDemo'

// const App = () => {
//   return (
//     <div>
//     {/* /* /* //   <Navbar/>
//     //   <Routes>
//     //     <Route   path='/'  element={<Home/>}/>
//     //     <Route   path='/about'  element={<About/>}/>
       
//     //     <Route   path='/p'  element={<ProductList/>}/>
    


//     //   </Routes> */ /*/}
//     </div>
//     )
// 
import React from 'react'
// import UseReducerDemo from './assets/lec4/UseReducerDemo'
// import ToDoList from './assets/lec4/ToDoList'
import UseReducerToDoList from './assets/lec4/UseReducerToDoList'


const App = () => {
  return (
    <div>
      <UseReducerToDoList/>
    </div>
  )
}

export default App