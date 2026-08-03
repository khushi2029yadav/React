import React, { useReducer } from 'react'

const UseReducerToDoList = () => {
    let data={
        input:"",
        list:[]
    }
    function reducer(state, action){
        if(action.type=="inp"){
            return{
                ...state,
                input:action.payload,
                

            }
        }else if(action.type=="add"){
            return{
                ...state,
                list:[...state.list, state.input],
                input:""
            }

        }if (action.type === "delete") {
    return {
      ...state,
      list: state.list.filter((_, index) => index !== action.payload),
    };
  }

  return state;
}
    

    let[state, dispatch] = useReducer(reducer, data )
  return (
    <div>
        <input name='' value={state.input} onChange={(e)=>dispatch({type:"inp", payload:e.target.value})}></input>
         <button onClick={(e)=>dispatch({type:"add",})}>Add</button>
        
           {
            state.list.map((a, idx)=>{
                return (
                     <div key={idx}>
                <li>{a}</li>
                 <button onClick={(e)=>dispatch({type:"delete",payload:idx})}>delete</button>
                 </div>
                 );
            })
        }


    </div>
  )
}

export default UseReducerToDoList