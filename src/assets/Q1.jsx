import React, { useState } from 'react'
const Q1 = () => {
  const [count, setCount] = useState(0)
  const Increase = () => {
    if (count == 10) {
      alert("Maximum limit reached!!!")
    } else {
      setCount(count + 1);
    }
  };
  const Decrease = () => {
    if (count == 0) {
      alert("Minimum limit reached!!!")
    } else {
      setCount(count - 1)
    }
  };
  return (
    <>
      <h3>{count}</h3>
      <button onClick={Increase}>Increment</button>
      <button onClick={Decrease}>Decrement</button>

    </>

  );
};

export default Q1