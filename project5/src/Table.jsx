import React from 'react'

const Table = (props) => {
    //  i need a array to create rows
    // props can bundle the data/args 
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>phone</th>
                        <th>view</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.entries.map((entry, index) => {
                            return (
                                <tr key={index}>
                                    <td>{entry.name}</td>
                                    <td>{entry.phone}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                props.togglePopHandler({
                                                    status: true,
                                                    userData: {
                                                        name: entry.name,
                                                        phone: entry.phone
                                                    }
                                                })
                                            }}
                                        >view</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
