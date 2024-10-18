/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
let count=0
const App = () => {
  let [input,setinput] = useState('')
  let [output,setoutput] = useState([])
 
  let Add =()=>{
    if(input){
      localStorage.setItem("items",JSON.stringify([...output,input]))
      setoutput([...output,input])
      setinput(' ')
    }
  }

  let remove =(ri)=>{
     let result = output.filter((va)=> va!==ri)
     setoutput(result)
  } 
  return (
    <div className=''>
        <h1>TODO APP</h1>
        <div className='flex-1 text-center gap-4 border border-black'> 
        <input type="text" className='border-2  border-black p-2' value={input} onChange={(e)=> setinput(e.target.value)}/>
        <button className='border-2 border-black m-3' onClick={Add}>Add</button>
        </div>
        <div className='grid justify-center'>
       {
        output.map((e)=>(
          <div key={count++} className='flex '>
          <h1>{e}</h1>
          <button onClick={()=>remove(e)}>❌</button>
          </div>
        ))
       }
       </div>
    </div>
  )
}

export default App
