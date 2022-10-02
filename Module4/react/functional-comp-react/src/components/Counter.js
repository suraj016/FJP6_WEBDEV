import { useState } from "react"

function Counter(){

    const[count, setCount] = useState(0)  // state ka nam and function ka nam
 
     return(
        <div>
            <h1>this is a counter {count} </h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
     )
 
}

export default Counter