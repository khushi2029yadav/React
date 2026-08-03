import React, { useReducer } from 'react'


const UseReducerDemo = () => {
function reducer(state, action){
    if(action.type=="inc"){
        return state+1
    }else if(action.type=="dic"){
        return state-1
    }else if(action.type=="reset"){
        return 0
    } else{
        return state
    }

}
    let[state, dispatch]=useReducer(reducer, 0)
  return (
    <div>
        <h3>{state}</h3>
        <button onClick={()=>dispatch({type:"inc"})}>add </button>
         <button onClick={()=>dispatch({type:"dic"})}>sub </button>
          <button onClick={()=>dispatch({type:"reset"})}>reset </button>
    </div>
  )
}

export default UseReducerDemo