import TaskItem from "./TaskItem";

const TaskList = ( {tasks, onDeleteTask, onCompleteTask }) =>{
  return(
    <ul>
      {tasks.map((item) => (
        <TaskItem 
          key={item.id}
          task={item}
          onDelete={onDeleteTask}
          onComplete={onCompleteTask}
        />  
      ))}
    </ul>
  )
}

export default TaskList;