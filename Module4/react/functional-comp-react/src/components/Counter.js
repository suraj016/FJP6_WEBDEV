import { useState } from "react"

function Counter(){

    const[count, setCount] = useState(0)  // state ka nam and function ka nam
    const[text, setText] = useState('')
 
     return(
        <div>
            <h1> counter {count} </h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
           <input value = {text} onChange = {(e)=>setText(e.target.value)}></input>
           <h1>{text}</h1>
        </div>
     )
 
}

export default Counter