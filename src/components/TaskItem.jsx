const TaskItem = ({ task, onDelete, onComplete}) => {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span style={{textDecoration : task.completed ? 'line-through' : 'none'}}>{task.name}</span>
      <button className="complete-btn" onClick={() =>{ onComplete(task.id) }}> {task.completed? '已完成' : '未完成'} </button>
      <button className="delete-btn" onClick={() => onDelete(task.id) }> 删除 </button>
    </li>
  )
}

export default TaskItem