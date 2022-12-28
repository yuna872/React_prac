import React, { useState } from "react";

export default function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div className="counter">
      <div className='number'>{ count }</div>
      <button className='button' onClick={()=>{
        setCount(count+1)
      }}>Add +</button>
    </div>
  )
}