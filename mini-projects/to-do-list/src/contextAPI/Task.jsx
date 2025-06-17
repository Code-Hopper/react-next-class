import React, { useState, useContext, createContext, useEffect } from 'react'

const TaskContext = createContext()

const TaskProvider = ({ children }) => {

  // store data into local storage and load the data into tasks variable at render

  let [tasks, setTasks] = useState([])

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks)); // convert string back to array
    }

  }, [])

  const saveTasks = (task) => {

    setTasks((prev) => {
      const updatedTasks = [...prev, task]
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // store array as string
      return updatedTasks
    })
  }

  const updateCompletedtask = (taskId, checked) => {
  
    let localTasks = localStorage.getItem("tasks")

    let updatedTasks = []

    if (localTasks) {
      updatedTasks = JSON.parse(localTasks); // convert string back to array
    }

    updatedTasks = updatedTasks.map((task, index) => {
      if (taskId === index) {
        return {
          ...task,
          status: {
            ...task.status,
            completed: checked
          }
        }
      }
      return task
    })

    localStorage.setItem("tasks", JSON.stringify(updatedTasks))

    // Update React state so UI will re-render
    setTasks(updatedTasks)
  }

  return (
    <TaskContext.Provider value={{ tasks, saveTasks, updateCompletedtask }}>
      {children}
    </TaskContext.Provider>
  )
}

const useTask = () => useContext(TaskContext)

export { TaskProvider, useTask }
