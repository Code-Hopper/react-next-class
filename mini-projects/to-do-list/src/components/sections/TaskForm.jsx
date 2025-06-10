import React, { useState } from 'react'
import "../style/comman.scss"
import { FaPlus } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const TaskForm = () => {

    let [openForm, setOpenForm] = useState(false)

    const toggleAddTaskForm = () => {
        setOpenForm(!openForm)
    }

    return (
        <>
            <button
                className='task-form-trigger'
                onClick={toggleAddTaskForm}
            >
                <FaPlus />
            </button>
            <div className={`task-add-form-container ${openForm ? "show" : "hide"}`}>
                <div className='form-background'>
                    <div className='add-task-form'>
                        <div className='header flex justify-between p-3 bg-accentColor' style={{
                            color: "white"
                        }}>
                            <span className='font-bold text-2xl'>Add Task</span>
                            <button
                                className='bg-primaryColor p-3 rounded-full'
                                onClick={toggleAddTaskForm}
                            >
                                <FaXmark />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskForm
