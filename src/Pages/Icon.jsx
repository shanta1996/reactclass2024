import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import '../style.css'
const Icon = () => {
    const[products,setProduct]=useState([])
    useEffect(()=>{
        const cartdata=JSON.parse(localStorage.getItem('cartItems'))
        setProduct(cartdata)
    },[])
    return (
        <>
            <Link to="/cart" className='navbar-link cart-trolley-link mx-4'>
                <FiShoppingCart className='cart-trolley' />
                {/* <span className='cart-total-item'>{products.reduce((ac,item)=>ac+Number(item.quantity),0)}</span> */}
            </Link>
        </>
    )
}

export default Icon