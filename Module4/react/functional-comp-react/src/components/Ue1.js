// SIDE EFFECT IN REACT 



import  {useEffect, useState}  from "react"




function Ue1(){

    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `this is my title ${count}` // component did mount and component did updatebka be kam karta hae
    })
    return(
        <div>
            <h1>this is a counter {count}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
        </div>
    )
}

export default Ue1