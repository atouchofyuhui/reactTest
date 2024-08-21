import { useState } from "react";

const taskInput = ({ onaddTask }) => {

  const [ task , setTask ] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent the page from refreshing
    if(task.trim().length > 0){
      onaddTask(task); //pass the task to the parent component
      setTask(""); //clear the input field
    } 
  }

  return (
    <form onSubmit ={handleSubmit}>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="添加一个任务" />
      <button type="submit">添加</button>
    </form>
  )
}

export default taskInput;