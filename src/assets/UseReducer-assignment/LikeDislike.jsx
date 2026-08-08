import React, { useReducer } from 'react'
const reducer=(state, action)=>{
    if(action.type==="likes"){
        return{
            ...state,
            likes:state.likes+1
        };
    } else if(action.type==="dislikes"){
        return{
            ...state,
            dislikes:state.dislikes-1
        }
    } else{
        return state;
    }

};


const LikeDislike = () => {
    const[state, dispatch]=useReducer(reducer, {
        likes:0,
        dislikes:0
    })
  return (
  <>
  <h1>My Post</h1>
  <h3>Likes:{state.likes}</h3>
  <h3>Dislikes:{state.dislikes}</h3>
  <button onClick={()=>dispatch({type:"likes"})}>Like</button>
  <button onClick={()=>dispatch({type:"dislikes"})}>Disike</button>
  
  </>
  )
}

export default LikeDislike