import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { AddTaskBar } from './components/AddTaskBar'
import { TaskList } from './components/TaskList'
import { useState } from 'react'

export function App() {

const [newTaskText, setNewTaskText] = useState('')
const [tasks, setTasks] = useState <string[]>([])


function handleCreateNewTask() {
  setTasks([...tasks, newTaskText])
  setNewTaskText('')
}

function deleteTask(taskToDelete: string) {
  const tasksWithoutDeletedOne = tasks.filter(task => {
    return task != taskToDelete;
  })

  setTasks(tasksWithoutDeletedOne);
}
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTaskBar
          onSetNewTaskText={setNewTaskText}
          newTaskText={newTaskText}
          onCreateNewTask={handleCreateNewTask}
        />
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
        />
      </div>
    </>
  )
}


