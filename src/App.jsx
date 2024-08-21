import { useState } from 'react'
import { useEffect } from 'react'
import TaskInput  from './components/TaskInput'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [ tasks, setTasks ] = useState([])
  const [ filter, setFilters ] = useState( 'all' )

  const addTask = (taskName) => {/*  */
      const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false
      }
      setTasks([...tasks, newTask])
      console.log(newTask);
      // useEffect(() => {
      //   console.log(tasks); // 在 tasks 状态更新之后，这里会打印最新的任务列表
      // }, [tasks]);
  }

  const deleteTask = (taskId) => {  
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const completeTask  = ( taskId ) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task ))
  }

  const filterTasks = tasks.filter(task => {
    if (filter == 'completed') {
        return task.completed
    }else if(filter === 'incomplete') {
        return !task.completed
    }else {
        return task
    }
  })
  


  return (
   <div className="app">
    {/* <h1>Task Manager</h1> */}
    <TaskInput  onaddTask = {addTask} />
    <div>
      <button className={filter === "all" ? "active" : ""} onClick={()=>setFilters('all')}>全部</button>
      <button className={filter === "completed" ? "active" : ""} onClick={()=>setFilters('completed')}>已完成</button>
      <button className={filter === "incomplete" ? "active" : ""} onClick={()=>setFilters('incomplete')}>未完成</button>
    </div>
    <TaskList tasks={filterTasks} onDeleteTask={deleteTask} onCompleteTask={completeTask} />
   </div>
  )
}

export default App
