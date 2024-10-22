import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartContextprovider from './context/CartContext.jsx'
createRoot(document.getElementById('root')).render(
<CartContextprovider>
    <App />
</CartContextprovider>
  
)
