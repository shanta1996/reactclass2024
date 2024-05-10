import React,{useState,useCallback} from 'react'
import ChildCom from './ChildCom'

const ParentCom = () => {
    const[count,setCount]=useState(1)
    const[data,setData]=useState(10)

    const test=useCallback(()=>{
        
        console.log('React js useCallback')
        setData(data+1)
    },[data])

  return (
    <>

    <ChildCom data={data} test={test}/>
    
    <div className="container">
        <div className="d-flex justify-content-center">
            <div className="col-md-5 shadow p-3">
                <h1>{count}</h1>
                <button className='btn btn-primary' onClick={()=>setCount(count*2)}>Multiply by 2</button>
                
                {/* <h1>{data}</h1>
                <button className='btn btn-success'>Add</button>
                 */}
            </div>

        </div>
    </div>
    </>
  )
}

export default ParentCom