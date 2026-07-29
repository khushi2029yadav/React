import React, { use, useEffect, useState } from "react";

const UseeffectDemo = () => {
  const [count, setCount] = useState(0);
  const[city, setCity] = useState("Delhi");
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setdata(json);
      });
  }, []);  

  return (
   
    <div>
      <h3>{count}</h3>
      <h3>{city}</h3>
      <button onClick={()=>setCount(count+1)}>Count</button>
      <button onClick={()=>setCity("Mumbai")}>City</button>
      {data.map((a) => {
        
        return (<><h1>{a.id}</h1>
        <h1>{a.title}</h1>
        </>)
     
      })}
    </div>
  );
};

export default UseeffectDemo;