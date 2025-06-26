import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CourseProvider } from './context/CourseContext.jsx'


createRoot(document.getElementById('root')).render(
  <CourseProvider>
    <App />
  </CourseProvider>
)
