import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CourseProvider } from './context/CourseContext.jsx'
import { CartProvider } from './context/CartContext.jsx'


createRoot(document.getElementById('root')).render(
  <CourseProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </CourseProvider>
)
