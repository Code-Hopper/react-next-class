import React from "react"
import "./App.css"

const App = () => {

    let styleOne = {
        color: "rgba(var(--color1),0.5)",
        background: "var(--color3)"
    }

    return (
        <div className="content-container">
            <h1 style={styleOne}>content{100 + 300}</h1>
        </div>
    )
}

let data = 1000

// default export
// we can export a single component/data only
// export default App

// named export

export { App, data }