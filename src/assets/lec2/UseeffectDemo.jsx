import React, { useEffect, useState } from "react";

const UseeffectDemo = () => {
  const [data, setData] = useState([]);
  const [deletedItem, setDeletedItem] = useState(null);

  // Delete Function
  const handleDelete = (id) => {
    // Delete hone wala object nikal lo
    const item = data.find((a) => a.id === id);

    // Us object ko save kar lo
    setDeletedItem(item);

    // Data me se remove kar do
    const updatedData = data.filter((a) => a.id !== id);

    // State update
    setData(updatedData);
  };

  // Undo Function
  const handleUndo = () => {
    if (deletedItem) {
      setData([...data, deletedItem]);
      setDeletedItem(null);
    }
  };

  // API Call
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <>
      {/* Undo Button */}
      <button
        onClick={handleUndo}
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
          margin: "15px",
        }}
      >
        Undo
      </button>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {data.map((a) => (
          <div
            key={a.id}
            style={{
              border: "2px solid black",
              borderRadius: "8px",
              padding: "10px",
              width: "250px",
            }}
          >
            <h3>Id: {a.id}</h3>
            <h3>User ID: {a.userId}</h3>
            <p>Title: {a.title}</p>

            <button
              onClick={() => handleDelete(a.id)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default UseeffectDemo;