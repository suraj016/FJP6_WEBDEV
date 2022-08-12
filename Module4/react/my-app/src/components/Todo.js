import { Component } from "react";

class Todo extends Component{
    constructor(){
        super();
        this.state = {
            task:["Learn JS", "Learn DODM", "Learn React", "Learn Frontend"],
            currTask:""
        }
    }
    render(){
       return(

        <div>

<input type="text"  value = {this.state.currTask}/>
       <button>Add Task</button>


       <ul>
      {this.state.task.map((ele) =>(
        <li>
            <p>{ele}</p>    
        </li>
      ))}
       </ul>
        </div>
      
       )
    }
}

// jsx mae loop nhi lga sakte
// map fingers
// filter
//reduce



export default Todo;