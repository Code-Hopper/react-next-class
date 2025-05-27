import React from 'react'
import { useState, useEffect } from 'react'

import "./App.scss"
import Table from './Table'

const App = () => {

  // let [data, setData] = useState(0)
  // let [inputValue, setInputValue] = useState("")

  let [show, setShow] = useState({
    status: false,
    userData: {
      name: "",
      phone: ""
    }
  })

  let [entries, setEntries] = useState([])

  let [formData, setFormData] = useState({
    name: "",
    phone: ""
  })

  let handleChange = (e) => {
    let { name, value } = e.target
    setFormData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  let handleSumit = (event) => {
    event.preventDefault()
    setEntries((prev) => {
      return [...prev, formData]
    })

    setShow(true)
  }

  let displayRow = (props) => {

    console.log(props)

    return (
      <tr key={props.index}>
        <td>{props.name}</td>
        <td>{props.phone}</td>
      </tr>
    )
  }

  useEffect(()=>{

    alert("Welcome to the app")

  },[])

  return (
    <div>

      {/* <h1>The data is {data}</h1>
      <button onClick={() => { setData(data + 1) }}>increase</button>

      <button onClick={() => { setData(data - 1) }}>decrease</button>

      {
        data > 50 ? <h1>hello</h1> : null
      } */}

      {/* controlled components */}

      {/* <input onChange={handleChange} type="text" value={inputValue} placeholder='enter something' /> */}

      <form onSubmit={handleSumit}>

        <input onChange={handleChange} type="text" placeholder='enter name' name='name' value={formData.name} />

        <input onChange={handleChange} type="text" placeholder='enter phone' name='phone' value={formData.phone} />

        <button>Submit</button>

      </form>


      <Table entries={entries} togglePopHandler={setShow} />

      {/* <div id='pop-up' className={`${show ? "showPopUp" : null}`}> */}

      {
        show.status ?
          <div id='pop-up'>
            <div className='header'>
              <span>Welcome</span>
              <button onClick={() => { setShow(false) }}>close</button>
            </div>
            <div className='pop-up-body'>
              <span>{show.userData.name}</span>
              <span>{show.userData.phone}</span>
            </div>
          </div> : null
      }

    </div>
  )
}

export default App
