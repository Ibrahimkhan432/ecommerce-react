import { Route, Routes } from 'react-router'
// import { Header } from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { Signup } from './Auth/Signup'
import { Signin } from './Auth/Signin'
import Auth from './Auth/Auth'
// import {Dashboard} from './Pages/Dashboard'
import { Orders } from './Pages/Orders'
import  ProductDetail  from './Pages/ProductDetail'
import Dashboard from './Pages/Dashboard'
import Header from './components/Header'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Cart from './Pages/Cart'

function App() {
  
  return (
<>
  <BrowserRouter>
        <Routes>
          {/* auth parent route */}
          <Route path="/auth">
            <Route index element={<Auth/>} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
          </Route>
          {/* auth ke elawa */}

          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </>  
  )
}

export default App
