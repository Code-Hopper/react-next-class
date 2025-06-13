import React from 'react'

import { MdAddTask } from "react-icons/md";
import TaskForm from './components/sections/TaskForm';

import { TaskProvider } from './contextAPI/Task';
import DisplayTasksTable from './components/sections/DisplayTasksTable';

const App = () => {
  return (
    <>
      <TaskProvider>
        <div className='title py-10'>
          <h1 className='text-center flex gap-2 items-center justify-center text-3xl'>
            <MdAddTask className='text-accentColor' /> <span>To Do List</span>
          </h1>
        </div>
        <DisplayTasksTable />
        <TaskForm />
      </TaskProvider>
    </>
  )
}

export default App
