import React, { useState } from 'react'
import { useTask } from '../../contextAPI/Task'

const DisplayTasksTable = () => {

    let { tasks, updateCompletedtask } = useTask()

    let handleTaskCompleted = (event, taskId) => {

        let { checked } = event.target

        updateCompletedtask(taskId, checked)
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
                                            <td className={`${task.status.completed ? "completed" : "pending"}`} >{task.title}</td>
                                            <td className={`${task.status.completed ? "completed" : "pending"}`} >{task.discription}</td>
                                            <td className={`${task.status.completed ? "completed" : "pending"}`} >{task.time}</td>
                                            <td className={`${task.status.completed ? "completed" : "pending"}`} >{task.priority}</td>
                                            <td className={`${task.status.completed ? "completed" : "pending"}`} >{`${task.message ? task.message : "no message"}`}</td>
                                            <td className='!text-center'>
                                                <input onChange={(event) => handleTaskCompleted(event, index)} type="checkbox" name='completed' checked={task.status.completed} />
                                            </td>
                                            <td className='flex gap-2'>
                                                <button className='bg-[rgba(50,50,200)] px-3 py-1 text-secondaryBackgroundColor'>Edit</button>
                                                <button className='bg-accentColor text-secondaryBackgroundColor px-3 py-1'>Delete</button>
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
