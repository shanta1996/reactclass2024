import React,{useState,useMemo} from 'react'

const Memo = () => {
    const[count,setCount]=useState(5)
    const[data,setData]=useState(1)
    //define the function
    const squareFunc=useMemo(()=>{
        return count * count
    },[count])

    const increMent=useMemo(()=>{
        return data+1
    })

  return (
    <>
    <div className="container">
        <div className="d-flex justify-content-center">
            <div className="col-md-5 shadow p-3">
                <h1>{count} and it's square is {squareFunc}</h1>
                {/* <h1>square is {squareFunc}</h1> */}
                <button className='btn btn-secondary' onClick={()=>setCount(count+1)}>Click Here</button>
                <h1>{data}</h1>


                <h1>{data} and it's increment by 1 is {increMent}</h1>
                <button className='btn btn-success' onClick={()=>setData(data+2)}>Add</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Memo
