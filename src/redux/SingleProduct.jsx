import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct } from './actions/productAction'

const SingleProduct = () => {
  const dispatch = useDispatch()
  const data = useSelector(store => store.product)
  const product = data.product

  useEffect(() => {
    dispatch(fetchSingleProduct(5))
  }, [dispatch])
  return (
    <>
      {/* <h6>{product.title}</h6>
    <p>{product.price}</p>
    <h3>{product.category}</h3> */}

      <div className="container">
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-4">
            <img src={product.image} alt={product.title} height={'200'} />
          </div>
          <div className="col-6">
            <h5>{product.title}</h5>
            <h6>{product.description}</h6>
            <p>${product.price}</p>

          </div>
        </div>
      </div>

    </>
  )
}

export default SingleProduct