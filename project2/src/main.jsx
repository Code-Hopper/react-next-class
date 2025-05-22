import { createRoot } from 'react-dom/client'

import "./index.css"

// default import
// import AnyName from "./App.jsx"

// named import
import { App } from "./App"

createRoot(document.getElementById('root')).render(
  <App/>
)
