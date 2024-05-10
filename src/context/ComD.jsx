import React,{useContext} from 'react'
import { GlobalContext } from './GlobalValue'

const ComD = () => {
    const data=useContext(GlobalContext)
  return (
    <>
    <b>Student name is {data.first_name}  {data.last_name}</b>
    <br />
    <b>We are learning the language called {data.subject}</b>
    <br />
    <b>My address is {data.address}</b><br />
    <b>My age is {data.age}</b>
    
    </>
  )
}

export default ComD