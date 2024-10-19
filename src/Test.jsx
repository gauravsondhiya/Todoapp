/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
let count=0
const Test = () => {
  let [input,setinput] = useState("")
  let [output,setoutput] = useState([])
  let submit=()=>{
    setoutput([...output,input])
    setinput(" ")
  }

  // data input
  useEffect(()=>{
    if(output.length>0){
      localStorage.setItem("list",JSON.stringify(output))
    }
  },[output])

  // dataoutput

  useEffect(()=>{
  let values =JSON.parse(localStorage.getItem("list"))
  setoutput(values)
  },[])

  let cancel = (cav)=>{
   let filvalue= output.filter((e)=>e!==cav)
   setoutput(filvalue)
  }
  return (
    <div>
        <h1 className='text-red-500 font-bold text-5xl text-center'>TODO APP</h1>
        <div className='text-center space-x-4'>
      <input type="text" onChange={(e)=>setinput(e.target.value)} value={input}
       className='border-2 border-black w-[500px] rounded-lg  h-[50px] text-xl'/>
      <button onClick={submit} className='border-2 border-black  h-[50px] rounded-xl w-24 text-xl'>ADD</button>
      </div>
      <div>
      {
        output.map((e,i)=>(
          <div key={count++} className=''>
           <div className='flex border-2 border-red-400 justify-around m-2 p-1 '>
            <div><h1>{e}</h1></div>
            <div className='mx-1'>
               <button className='text-2xl' onClick={()=>cancel(e)}>❌</button>
              <button className='text-2xl'  onClick={()=>cancel(e)}>🧑‍💻</button>
            </div>
          </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Test
