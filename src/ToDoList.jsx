import React, { useState } from "react"

function ToDoList() {
    //Holds tasks
    const [tasks, setTasks] =  useState(["stuff", "more stuff"]);
    //Temp state
    const [newTask, setNewTasks] = useState("");

    const [taskComplete, setTaskComplete] = React.useState(false)



    

    function handleInputChange(event) {

        setNewTasks(event.target.value);
    }

    //Adds new task to list
    function addTask() {
        
        if(newTask.trim !== "") {
            
            setTasks(tasks =>[...tasks, newTask]);
            setNewTasks("");
        }
    }

    //Marks task as complete
    const toggleComplete = (index) => {

        setTasks(
          tasks.map((task) =>
            tasks.index === index ? { ...task, completed: !task.completed } : task
          )
        );
      }
    //Deletes task from list
    function deleteTask(index) {
    
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);

    }
    //Moves selected task up list by one
    function moveTaskUp(index) {
        
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
    }
    //Moves selected task down list by one
    function moveTaskDown(index) {

        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    return(
    
        <div className="row">
            <div className="col-sm-12">
                <div className="to-do-list">    
                    <div>

                        <h1>To-Do List</h1>        

                            <input 
                                type="text" 
                                placeholder="Enter a task..." 
                                value={newTask} 
                                onChange={handleInputChange}/>
                            <button className="add-button" onClick={addTask}>
                                Add
                            </button>
                    </div>
                
                        <ol>
                            {tasks.map((task, index) =>
                                <li key={index}>
                                    <span className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task}</span>
                                    <button className="delete-button" onClick={() => deleteTask(index)}>
                                    ❌
                                    </button>
                                    <button className="move-button" onClick={() => moveTaskUp(index)}>
                                    🔼
                                    </button>
                                    <button className="move-button" onClick={() => moveTaskDown(index)}>
                                    🔽
                                    </button>
                                    <button className="completed-button" onClick={() => completedTask(task)}>✅</button>
                                </li>                
                            )}
                        </ol>            
                </div>                
            </div>
        </div>
    );

}
export default ToDoList