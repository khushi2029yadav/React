// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={() => setCount(count + 1)}>Increment
//       </button>

//       <button onClick={() => setCount(count - 1)}>Decrement</button>

//       <button onClick={() => setCount(0)}>Reset</button>
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
//         gap: "15px",
//       }}
//     >
    
//  <Counter />

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
//   return <BackgroundChanger />;
// }

// export default App;
import React from 'react'

import { useState } from "react";

function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div
      style={{
        backgroundColor: isDarkTheme ? "#222" : "white",
        color: isDarkTheme ? "white" : "black",
        padding: "30px",
      }}
    >
      <h2>{isDarkTheme ? "Dark Theme" : "Light Theme"}</h2>

      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
        Switch to {isDarkTheme ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
}

export default ThemeToggle;