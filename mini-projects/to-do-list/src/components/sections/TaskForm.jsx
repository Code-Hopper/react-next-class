import React, { useState } from 'react'
import "../style/comman.scss"


import { useTask } from '../../contextAPI/Task'

import { FaPlus } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const TaskForm = () => {

    let [openForm, setOpenForm] = useState(true)

    let [formData, setFormData] = useState({
        title: "",
        discription: "",
        priority: "",
        time: "",
        message: ""
    })

    let { tasks, saveTasks } = useTask()

    const toggleAddTaskForm = () => {
        setOpenForm(!openForm)
    }

    const handleChange = (e) => {
        let { name, value } = e.target

        setFormData(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        saveTasks(formData)
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
                        <div className='task-form-body'>
                            <form onSubmit={handleSubmit}>
                                <h1>Add</h1>

                                <input onChange={handleChange} type="text" placeholder='Enter Task Title' name='title' value={formData.title} required />

                                <input onChange={handleChange} type="text" placeholder='Enter Task Discription' name='discription' value={formData.discription} required />

                                <input onChange={handleChange} type="datetime-local" name='time' value={formData.time} required />

                                <select onChange={handleChange} id="" name="priority" required>
                                    <option value="default" selected>Select Priority</option>
                                    <option value="Very Important">Very Important</option>
                                    <option value="Important">Important</option>
                                    <option value="normal">normal</option>
                                    <option value="less important">less important</option>
                                </select>

                                <textarea onChange={handleChange} name="message" value={formData.message} id="" rows={10} placeholder='message...'>
                                </textarea>

                                <div className='flex justify-center gap-3 font-bold'>
                                    <button type='submit' className='p-2 bg-[rgba(0,255,0)]'>Submit</button>
                                    <button type='reset' onClick={() => {
                                        setFormData({
                                            title: "",
                                            discription: "",
                                            priority: "",
                                            time: "",
                                            message: ""
                                        })
                                    }} className='p-2 bg-accentColor text-secondaryBackgroundColor'>Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskForm
