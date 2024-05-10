import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import HomePage from './Pages/HomePage'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import Register from './Pages/Register'
import Nav from './redux/Nav'
import ShowProduct from './redux/ShowProduct'
import SingleProduct from './redux/SingleProduct'
// import Test from './Test'
// import First from './First'
// import Intro from './Intro'
// import './style.css';
// import Error from './Error'

const MyRoute = () => {
  return (
    <Router>
        <Routes>
            {/* <Route path='/' element={<Test/>}/>
            <Route path='/demo' element={<First/>}/>
            <Route path='/lorem' element={<Intro/>}/>
            <Route path='*' element={<Error/>}/> */}

            <Route path='/' element={<Layouts/>}>
              <Route index element={<HomePage/>}/>
              <Route path='products' element={<Products/>}/>
              <Route path='productdetails/:productId' element={<ProductDetail/>}/>
              <Route path='cart' element={<Cart/>}/>
              <Route path='register' element={<Register/>}/>
              <Route path='redux/first' element={<Nav/>}/>
              <Route path='product/fetch' element={<ShowProduct/>}/>
              <Route path='single' element={<SingleProduct/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default MyRoute