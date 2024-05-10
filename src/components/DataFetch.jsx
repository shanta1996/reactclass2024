import React, { useEffect, useState } from 'react'
import axios from 'axios'
const DataFetch = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then((response)=>setProducts(response.data))
        .catch(error=>console.log(error))
    })
  return (
    <>
    {/* {products && products.map(items=>(
        <div>
            <h1>{items.title}</h1>
            <p>{items.description}</p>
            <h1>{items.price}</h1>
            <p>{items.category}</p>
            <p>{items.image}</p>

        </div>
    ))} */}
    </>
  )
}

export default DataFetch