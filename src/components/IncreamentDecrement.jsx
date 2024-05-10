import React,{useState} from 'react'

const IncreamentDecrement = () => {
  const[num,setNum]=useState(1)

  // const increase=()=>(
    // setNum(num*2)
    // setNum(num-10)
    // setNum(num+4)
    // setNum(num**2)
  // )
  return (
    <>
    <h2>{num}</h2>
    {/* <button className='btn btn-danger' onClick={increase}>Add</button> */}
    {num<10 &&
    <button className='btn btn-info' onClick={()=>setNum(num+1)}>Add</button>

     }
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {
      num>1 &&
    <button className='btn btn-danger' onClick={()=>setNum(num-1)}>Substract</button>
    }


    </>
  )
}

export default IncreamentDecrement