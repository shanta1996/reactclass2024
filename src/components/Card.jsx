import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Card = (props) => {
  // const max=50
  const { title, price, id, image, category } = props.data
  const [products,setProducts]=useState([])
  const [load,setLoad]=useState(8)


  // const title=props.data.title
  // const price=props.data.price
  // const id=props.data.id
  // const image=props.data.image

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products`)
    .then((response)=>setProducts(response.data))
    .catch(error=>console.log(error))
})


  // const loadMore=()=>{
  //   if(load <= max) {
  //     let load = load + 8;
  //     setLoad(load)
  //   }

  // }

 

return (
  <>
    <div className="col">
      <div className="card">

        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5>{category}</h5>
          <h4>${price}</h4>
          <Link to={`/productdetails/${id}`} lassName="btn btn-info">View Details</Link>

          {/* <button onClick={loadMore} className="btn btn-dark mx-3 rounded-3 btn-outlilne-secondary">Load More Images</button> */}

        </div>
      </div>
    </div>
  </>
);
}

export default Card;
