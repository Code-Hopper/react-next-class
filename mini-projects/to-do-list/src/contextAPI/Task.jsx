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

  return (
    <TaskContext.Provider value={{ tasks, saveTasks }}>
      {children}
    </TaskContext.Provider>
  )
}

const useTask = () => useContext(TaskContext)

export { TaskProvider, useTask }
