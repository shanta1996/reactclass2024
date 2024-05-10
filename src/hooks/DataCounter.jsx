import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'

//define the initial state
const initialState={
    count:1
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count:state.count+1
            }
            case 'DECREMENT':   
                return{
                    count:state.count-1
                }
            default:
                return state
    }
}


const DataCounter = () => {
    //useReducer returns the current state and a dispatch function
    //dispatch=calling the function
    const[state,dispatch]=useReducer(reducer,initialState)

  return (
    <>
    <h3>{state.count}</h3>
    <button className='btn btn-primary mx-4' onClick={()=>dispatch({type:'INCREMENT'})}>Increase Counter</button>
    <button className='btn btn-danger' onClick={()=>dispatch({type:'DECREMENT'})}>Decrement Counter</button>
    
    </>
  )
}

export default DataCounter