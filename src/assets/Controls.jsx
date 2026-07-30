import React from 'react'

const Controls = ({ count, setCount }) => {
    //controls me hi dono ke useState bna ke kre do hume ye alag alag krne ki jarurat kya hai and even hum isme sirf setCount krke hi prev+1 krke kr sakte hai na
    // count+1 & prev => prev+1 dono same hi to output dete hai to kaunsa kb use krna chahiye
    //aur ek galti hui mujse ki maine control me dono count and setcount paas kiya but app me sirf setcount to output nan aa rha tha aisa q
    


    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
        </>
    )
}

export default Controls