import React from 'react'
import { useDispatch } from 'react-redux'

const Items = () => {
    const dispatch=useDispatch()
    const addItem=()=>(
        dispatch({type:'ADD_ITEM'})
    )
    const decreaseItem=()=>{
        dispatch({type:'DECREASE_ITEM'})
    }
  return (
    <>
    <button className='btn btn-primary' onClick={addItem}>Add Item</button>
    <button className='btn btn-danger' onClick={decreaseItem}>Decrease Item</button>
     
    </>
  )
}

export default Items