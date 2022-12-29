import React, { useState } from "react";

export default function Counter({total, onClick}){
  const [count, setCount] = useState(0);
  return(
    <div className='counter'>
      <div className='number'>{ count }<span className="total">/{total}</span></div>
      <button className='button' onClick={()=>{
        setCount(count+1)
        onClick();
      }}>Add +</button>
    </div>
  )
}