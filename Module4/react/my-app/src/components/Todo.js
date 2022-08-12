import { Component } from "react";

class Todo extends Component{
    constructor(){
        super();
        this.state = {
            task:["Learn JS", "Learn DODM", "Learn React"]
        }
    }
    render(){
       return(

        <div>

<input type="text" />
       <button>Add Task</button>


       <ul>
      {this.state.tasks.map((ele) =>(
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



export default Todo;