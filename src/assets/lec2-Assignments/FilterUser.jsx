import React, { useEffect, useState } from 'react'

const FilterUser = () => {
    const [todo, SetTodo] = useState([]);
    const [userId, SetuserId] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                SetTodo(data);
            })
    }, [])
    const filteredUser = todo.filter((a) => {
        return a.userId === userId;
    })
    return (
        <>
            <button onClick={() => SetuserId(1)}>User 1</button>
            <button onClick={() => SetuserId(2)}>User 2</button>
            <button onClick={() => SetuserId(3)}>User 3</button>
            {
                filteredUser.map((a) => {
                    return (
                        <div key={a.id}>
                            <h3>{a.id}
                            </h3>
                            <h3>{a.title}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}

export default FilterUser