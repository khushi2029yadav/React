import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "next") {
    if (state === "Red") {
      return "Yellow";
    } else if (state === "Yellow") {
      return "Green";
    } else if (state === "Green") {
      return "Red";
    }
  }

  return state;
};

const TrafficLight = () => {
  const [color, dispatch] = useReducer(reducer, "Red");

  return (
    <>
      <h1>Traffic Light</h1>

      <h2>Current Color: {color}</h2>

      <button onClick={() => dispatch({ type: "next" })}>
        Next
      </button>
    </>
  );
};

export default TrafficLight;