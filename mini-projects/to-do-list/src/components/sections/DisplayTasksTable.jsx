import React from 'react'
import { useTask } from '../../contextAPI/Task'

const DisplayTasksTable = () => {

    let { tasks } = useTask()

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
                                        <tr className='' key={index}>
                                            <td>{index}</td>
                                            <td>{task.title}</td>
                                            <td>{task.discription}</td>
                                            <td>{task.time}</td>
                                            <td>{task.priority}</td>
                                            <td>{`${task.message ? task.message : "no message"}`}</td>
                                            <td className='!text-center'>
                                                <input type="checkbox" />
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
