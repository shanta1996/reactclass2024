import React,{memo} from 'react'

const ChildCom = ({data,test}) => {
    console.log('Child component rendered.')
    
    
  return (
    <>
    <h3 className='text-success'>Child Component={data}</h3>
    <button className='btn btn-danger' onClick={test}>Click</button>
    {/* <button className='btn btn-success' onClick={()=>setData(data+1)}>Add</button> */}
    </>
  )
}

export default memo(ChildCom)