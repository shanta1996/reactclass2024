import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import RatingStar from '../components/RatingStar';

const ProductDetail = () => {
  const [product, setProduct] = useState({})
  const params = useParams()
  const pid = params.productId

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${pid}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [])

  //handling cart submit
  const addCart=()=>{
    const cartItems=JSON.parse(localStorage.getItem('cartItems')) || []
    //define object for all the details of the product
    const productItem={
      id:product.id,
      title:product.title,
      price:product.price,
      image:product.image,
      category:product.category,
      quantity:1,
    }
    //check if item is already in the cart
    const existingItem=cartItems.find(item=>item.id===product.id)
    if(existingItem){
      toast.error(`${productItem.title} already in the cart`)
    }
    else{
      cartItems.push(productItem)
      localStorage.setItem(`cartItems`,JSON.stringify(cartItems))
      toast.success(`${productItem.title} is added to cart`)
    }
  }
  return (
    <>
    <Helmet>
      <title>{product.title}</title>
    </Helmet>
    <ToastContainer theme='colored' position='top-center'/>
     

      <div className="container">
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-4">
            <img src={product.image} alt={product.title} width={'300'} className='img-fluid' />
          </div>
          <div className="col-6">
            <h4>{product.title}</h4>
            <u>{product.description}</u>

            <p>${product.price}</p>
            {/* <b>{product.category}</b> */}
            <br />
            <p>{product.image}</p>
            <p><strong>Category:</strong>{product.category}</p>

            {product.rating && 
            <>
            <RatingStar rating={product.rating.rate}/>
            &nbps;<span>({product.rating.count})</span>
            </>}
            <div className="my-3">
              <button className='btn btn-danger' onClick={addCart}>Add to cart</button>
            </div>

          </div>
        </div>
      </div>



    </>
  )
}

export default ProductDetail