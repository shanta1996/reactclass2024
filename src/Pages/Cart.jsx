import React, { useState, useEffect, Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { FaTrash } from "react-icons/fa";

const Cart = () => {
    const [products, setProduct] = useState([])
    useEffect (() => {
        const cartdata = JSON.parse(localStorage.getItem('cartItems'))
        setProduct(cartdata)
    }, [])

    // increase quantity
    const increaseQuantity=id=>{
        const updateCarts=products.map((item)=>{
            if(item.id==id){
                return{...item,quantity:item.quantity+1}
            }
        return item
        })
        setProduct(updateCarts)
        localStorage.setItem('cartItems',JSON.stringify(updateCarts))
    }
//decrease quantity
    const decreaseQuantity=id=>{
        const updateCarts=products.map((item)=>{
            if(item.id==id && item.quantity>1){
                return{...item,quantity:item.quantity-1}
            }
        return item
        })
        setProduct(updateCarts)
        localStorage.setItem('cartItems',JSON.stringify(updateCarts))
    }

    //remove from the cart
    const removeCarthandler=id=>{
        const confirmed=window.confirm('Are you sure want to delete this item from the cart?')
        if(confirmed){
            const filterCart=products.filter(item=>item.id!==id)
            setProduct(filterCart)
            localStorage.setItem('cartItems',JSON.stringify(filterCart))
            toast.success('Product is removed from the cart')
        }
    }

    return (
        <>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <ToastContainer theme='colored' position='top-center' />
            <div className="container">
                <div className="row d-flex justify-content-between my-5">
                    {products.length === 0 ?(
                        <h2 className=' text-center text-danger mt-5'>Your Cart is empty</h2>
                    ) : (
                        <>
                            <h2 className='text-center'>Your Cart items</h2>
                            <div className="col-md-8 shadow">
                                {products && products.map((items, index) => (
                                    <Fragment key={index}>
                                        <hr />
                                        <div className="row d-flex align-items-center">
                                            <div className="col-2">
                                                <img src={items.image} alt={items.title} width='50' />
                                            </div>
                                            <div className="col-3">
                                                <strong>{items.title}</strong>
                                            </div>
                                            <div className="col-2 text-warning">${items.price}</div>
                                            <div className="col-3">
                                                <div className="d-flex">
                                                    <button className='btn btn-danger' onClick={()=>decreaseQuantity(items.id)}>-</button>
                                                    &nbsp;
                                                    <input type="number" value={items.quantity} readOnly className='form-control text-center border-0' /> 
                                                    &nbsp;
                                                    <button className='btn btn-primary' onClick={()=>increaseQuantity(items.id)}>+</button>

                                                </div>
                                            </div>
                                            <div className="col-1">
                                                <button className='btn btn-danger' onClick={()=>removeCarthandler(items.id)}>
                                                    <FaTrash/>
                                                </button>
                                            </div>
                                        </div>
                                        <hr />
                                    </Fragment>


                                ) )}
                            </div>
                            <div className="col-md-3">
                                <div className="shadow p-2">
                                    <h5>Cart summary</h5>
                                    <hr />
                                    <p><strong>Units:</strong>
                                    {products.reduce((accumulator,item)=>accumulator+Number(item.quantity),0)}
                                    </p>
                                    <p><strong>Total</strong>${products.reduce((accumulator,item)=>accumulator+item.quantity*item.price,0)}</p>
                                    <hr />
                                    <button className='btn btn-warning'>Check out</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>

    )
}

export default Cart