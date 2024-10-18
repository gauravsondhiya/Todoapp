/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
let id = 0
const Test = () => {
    
    let [inputv,setinputv] = useState("")
    let [output,setoutput] = useState([])
    
    let add =()=>{
       setoutput([...output,inputv]) 
    }
    useEffect(()=>{
      if(output.length>0){
        localStorage.setItem("list", JSON.stringify(output)) 
      }
    
    },[output])

    useEffect(()=>{
        let result = JSON.parse(localStorage.getItem('list'))
        setoutput(result)
    },[])

    let remove=(rv)=>{
        let rem= output.filter((e)=>e!==rv)
        setoutput(rem)
    }
  return (
    <div>
      <input type="text"  value={inputv} onChange={(e)=>setinputv(e.target.value)} className='border border-black'/>
      <button onClick={add} className='border border-black'>add</button>
          {  
            output.map((e)=>(
                <div key={id++} className='flex m-3 ml-2'> 
                    <h1>{e}</h1>
                    <button onClick={()=>remove(e)}>❌</button>
                </div>
              
            ))
          }
    </div>
  )
}

export default Test
