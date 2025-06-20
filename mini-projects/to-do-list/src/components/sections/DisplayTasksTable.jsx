import React, { useState } from 'react'
import { useTask } from '../../contextAPI/Task'

const DisplayTasksTable = () => {

    let { tasks, updateCompletedtask, deleteTask, updateTask } = useTask()

    let [notEditable, setNotEditable] = useState(true)

    let [editData, setEditData] = useState({
        title: "",
        time: "",
        discription: "",
        priority: ""
    })

    let handleTaskCompleted = (event, taskId) => {

        let { checked } = event.target

        updateCompletedtask(taskId, checked)
    }

    let handleDeleteTask = (taskId) => {
        deleteTask(taskId)
    }

    let handleSaveEdit = (taskId) => {
        console.log(editData)
        updateTask(taskId, editData)
    }

    let handleEditChange = (e) => {
        let { name, value } = e.target
        setEditData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    return (
        <>
            <div className='display-task-table'>
                <table className='table'>
                    <tbody>
                        <tr>
                            <th>Index</th>
                            <th>Title</th>
                            <th>Discription</th>
                            <th>Time</th>
                            <th>Priority</th>
                            <th>Message</th>
                            <th>Completed</th>
                            <th>Action</th>
                        </tr>

                        {
                            Array.isArray(tasks) ? tasks.map((task, index) => {

                                return (
                                    <>
                                        <tr className='task-row' key={index}>
                                            <td className={`${task.status.completed ? "completed" : "pending"}`} >{index}</td>

                                            {
                                                notEditable ? <td> <span> {task.title} </span> </td> : <td className={`${task.status.completed ? "completed" : "pending"}`} ><input onChange={handleEditChange} type="text" name="title" value={editData.title} disabled={notEditable} /> </td>
                                            }

                                            {
                                                notEditable ? <td><span>{task.discription}</span> </td> : <td className={`${task.status.completed ? "completed" : "pending"}`} ><input onChange={handleEditChange} type="text" name='discription' value={editData.discription} disabled={notEditable} /> </td>
                                            }

                                            {
                                                notEditable ? <td> <span>{task.time}</span> </td> : <td className={`${task.status.completed ? "completed" : "pending"}`} ><input onChange={handleEditChange} type="datetime-local" name='time' value={editData.time} disabled={notEditable} /> </td>
                                            }

                                            <td className={`${task.status.completed ? "completed" : "pending"}`} >
                                                {/* <input type="text" value={task.priority} /> */}
                                                <select onChange={handleEditChange} name="priority" id="" disabled={notEditable}>
                                                    <option selected value={task.priority}>{task.priority}</option>
                                                    <option value="not important">not important</option>
                                                    <option value="just important">just important</option>
                                                </select>
                                            </td>

                                            <td className={`${task.status.completed ? "completed" : "pending"}`} >{`${task.message ? task.message : "no message"}`}</td>

                                            <td className='!text-center'>
                                                <input onChange={(event) => handleTaskCompleted(event, index)} type="checkbox" name='completed' checked={task.status.completed} />
                                            </td>

                                            <td className='flex gap-2'>
                                                <button onClick={() => { setNotEditable(!notEditable) }} className='bg-[rgba(50,50,200)] px-3 py-1 text-secondaryBackgroundColor'>Edit</button>
                                                <button onClick={(event) => { handleDeleteTask(index) }} className='bg-accentColor text-secondaryBackgroundColor px-3 py-1'>Delete</button>
                                                {
                                                    notEditable ? null :
                                                        <button onClick={() => { handleSaveEdit(index) }} className='bg-[rgba(0,250,0)] px-3 py-1 text-black'>Save</button>
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='' colSpan={8}>
                                                <input type="text" className='p-1 w-full' placeholder='Notes' />
                                            </td>
                                        </tr>
                                    </>
                                )
                            }) : <h1 className='text-center p-3 text-3xl'>No Data to Display</h1>
                        }

                    </tbody>
                </table>
            </div >
        </>
    )
}

export default DisplayTasksTable
