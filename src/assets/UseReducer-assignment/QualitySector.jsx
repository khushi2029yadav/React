import React, { useReducer } from 'react'
const reducer=(state, action)=>{
    if(action.type==="inc"){
        return state+1;
    }else if(action.type==="dec"){
        if(state===1){
            return state;
        }
        return state-1;
    }else{
        return state;
    }
}
const QualitySector = () => {
    const[quantity, dispatch] = useReducer(reducer, 1)
  return (
   <>
   <h1>Quantity Sector</h1>
   <button onClick={()=>dispatch({type:inc})}>+</button>
   <button onClick={()=>dispatch({type:dec})}>-</button>
   {
    quantity==1 && (
 <p>Quantity cannot go below one;</p>
    )
        
    
   }
   </>
  )
}

export default QualitySector