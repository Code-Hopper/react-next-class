import React from 'react'
import { useState } from 'react'



const App = () => {

  // let [data, setData] = useState(0)
  // let [inputValue, setInputValue] = useState("")

  let [formData, setFormData] = useState({
    name: "",
    phone: ""
  })

  let [entries, setEntries] = useState([])

  // let handleChange = (event) => {
  //   console.log(event)
  //   console.log(event.target.placeholder)
  //   setInputValue(event.target.value)
  // }

  let handleChange = (e) => {
    let { name, value } = e.target

    setFormData((prev) => {
      return { ...prev, [name]: value }
    })

  }

  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    setEntries((prev) => {
      return [...prev, formData]
    })

  }

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

      <form onSubmit={handleSubmit}>

        <input onChange={handleChange} placeholder='enter name' type="text" name='name' value={formData.name} />

        <input onChange={handleChange} placeholder='enter phone' type="tel" name='phone' value={formData.phone} />

        <button>submit</button>

      </form>

      <table border={1}>
        {
          entries.map((entry,index)=>{
            return (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.phone}</td>
              </tr>
            )
          })
        }
      </table>

    </div>
  )
}

export default App
