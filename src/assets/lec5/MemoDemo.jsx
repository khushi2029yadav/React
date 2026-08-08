import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'

const MemoDemo = () => {
    let[count, setCount]=useState(0)
    const ans = useMemo(()=>{
        let res =0;
        for(let i =0; i<1900000; i++){
            res+=i;
            
    }
    return res;
    },[]);
    let func=()=>{
        console.log("hii");
    }
    let kh = useCallback(func,[])
  return (
    <div>
        <h3>res:{ans}</h3>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>Count</button>
        <Child demo={kh}/>
    </div>
    
  )
}

export default MemoDemo