import React from 'react'

import Home from "./components/page/Home"

import { students } from './data.js'

const App = () => {

  let data = 20

  return (
    <>
      {/* <Home /> */}

      {
        data > 10 ? <h1>Greater Than 10</h1> : <h1>Less than 10</h1>
      }

      <h1>the value of data {data}</h1>

      <table className='table'>
        <thead className='table-header-group'>
          <th>Name</th>
          <th>class</th>
        </thead>
        <tbody>
          {
            students.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </>
  )
}

export default App


// condition ? true block : flase block