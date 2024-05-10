import React,{useState} from 'react'
const Mytextform = () => {
    const upclick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const btnonchange=(event)=>{
        setText(event.target.value)
    }
    const [text,setText]=useState('Enter text  here')
    return (
        <>
            
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={btnonchange} id="mybox" rows="8"></textarea>
                </div>
                <button className='btn btn-info' onClick={upclick}>Convert to Uppercase</button>
            
        </>
    )
}

export default Mytextform