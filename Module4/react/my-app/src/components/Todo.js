import { Component } from "react";


class Todo extends Component{
    constructor(){
        super();
        this.state = {
            task:[],
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
    task:[...this.state.task,{task:this.state.currTask,id:this.state.task.length+1}],
    currTask:""
   })


    }


    handleDelete = (id) =>{
        let narr = this.state.task.filter((taskObj)=>{
            return taskObj.id!= id
        })
        this.setState({
            task:[...narr]
        })
        
    }


    render(){
       return(

        <div>

     <input type="text"  value = {this.state.currTask} onChange = {this.handleChange}/>
       <button onClick={this.handleAddTask}>Add Task</button>


       <ul>
      {this.state.task.map((taskObj) =>(
        <li key = {taskObj.id}>
            <p>{taskObj.task}</p>   
            <button onClick={()=>this.handleDelete(taskObj.id)}>Delete</button> 
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