import { Component } from "react";

class Todo extends Component{
    constructor(){
        super();
        this.state = {
            task:["Learn JS", "Learn DODM", "Learn React", "Learn Frontend"],
            currTask:""
        }

       
    }

    handleChange = (e) =>{
        //console.log(e.target.value);

        this.setState({
            currTask:e.target.value
        })

    }

    handleAddTask = () =>{
   this.setState({
    task:[...this.state.task,this.state.currTask],
    currTask:""
   })


    }


    render(){
       return(

        <div>

     <input type="text"  value = {this.state.currTask} onChange = {this.handleChange}/>
       <button onClick={this.handleAddTask}>Add Task</button>


       <ul>
      {this.state.task.map((ele) =>(
        <li>
            <p>{ele}</p>   
            <button>Delete</button> 
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